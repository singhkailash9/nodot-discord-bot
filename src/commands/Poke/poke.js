import { getArgs, sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
import pokedex from "../../data/pokedex.json" assert { type: 'json' };
import { baseStatFilter } from "./base-stat.js";

const pokeCmd = async (message, margs)=>{
    try {
        const args = await getArgs(message, margs, 'pokename');
        if (!args || args.length === 0) {
            sendText(message, "Please provide a Pokémon name.");
            return;
        }
        const filters = args.slice(1);

        let pokeName = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();

        const pokeData = pokedex.find(p => p.name.english === pokeName);
        if (!pokeData) {
            sendText(message, "Pokémon not found!");
            return;
        }

        if (filters.includes('-b') || filters.includes('-base')) {
            await baseStatFilter(message, pokeData);
            return;
        }
        // } else if (filters.includes('-p') || filters.includes('-profile')) {
        //     await profileFilter(message, pokeData);
        // } else if (filters.includes('-e') || filters.includes('-evol')) {
        //     await evolutionFilter(message, pokeData);

        // Pokedex ID, Name, Type, description, species and the pokemon image.
        const pokeEmbed = createEmbed({
            title: `ID: ${pokeData.id} - ${pokeData.name.english}`,
            description: pokeData.description,
            fields: [
                { name: "Type", value: pokeData.type.join(', '), inline: true }
            ],
            imageUrl: `${pokeData.image.thumbnail}`,
            footerText: `Species: ${pokeData.species}`,
            color: '#d32256'
        });
        await sendEmbed(message, pokeEmbed);
    } catch (err) {
        console.error(`pokeCmd Error: ${err}`);
        sendText(message, "Something went wrong!")
    }
};

export { pokeCmd };