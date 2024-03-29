import { gifCmd } from '../commands/Fun/gif.js';
import { hackCmd } from '../commands/Fun/hack.js';
import { memeCmd } from '../commands/Fun/meme.js';
import { quoteCmd } from '../commands/Fun/quote.js';
import { helpCmd } from '../commands/Misc/help.js';
import { testCmd } from '../commands/Misc/test.js';
import { pokeCmd } from '../commands/Poke/poke.js';
import { convertCmd } from '../commands/Productivity/convert.js';
import { mathCmd } from '../commands/Productivity/math.js';
import { defineCmd } from '../commands/Utility/define.js';
import { pfpCmd } from '../commands/Utility/pfp.js';
import { pollCmd } from '../commands/Utility/poll.js';
import { userInfoCmd } from '../commands/Utility/userinfo.js';

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type

const commandList = {
    gif: {
        execute: gifCmd,
        description: 'Sends a gif based on the query provided.',
        category: 'Fun',
        options: [
            {
                "name": "query",
                "description": "Type the query for gif you need.",
                "type": 3,
                "required": true
            }
        ],
    },
    hack: {
        execute: hackCmd,
        description: 'Hack a user. Pass a username or mention them along with command.',
        category: 'Fun',
        options: [
            {
                "name": "targetname",
                "description": "Mention the name of User to hack.",
                "type": 6,
                "required": false
            }
        ],
    },
    meme: {
        execute: memeCmd,
        description: 'Shows a random meme from Reddit.',
        category: 'Fun',
    },
    quote: {
        execute: quoteCmd,
        description: 'Shows a random quote.',
        category: 'Fun',
    },
    help: {
        execute: helpCmd,
        description: 'Help command to get started.',
        category: 'Misc',
        options: [
            {
                "name": "commandname",
                "description": "The command to get help for",
                "type": 3,  // Type 3 is string
                "required": false
            }
        ],
    },
    test: {
        execute: testCmd,
        description: 'Test command for embed and bot status.',
        category: 'Misc',
    },
    poke: {
        execute: pokeCmd,
        description: 'Returns info of a pokemon. Optional filters: base state, evolution and profile using (-b, -e, -p).',
        category: 'Poke',
        options: [
            {
                name: "pokename",
                description: "The pokemon name to find information of.",
                type: 3, // STRING
                required: true
            },
            {
                name: "base",
                description: "Show base stats information. Filter using -b or -base after command.",
                type: 5, // BOOLEAN
                required: false
            },
            {
                name: "profile",
                description: "Show Pokemon profile information. Filter using -p or -profile after command.",
                type: 5,
                required: false
            },
            {
                name: "evolution",
                description: "Show Pokemon evolution information. Filter using -evol or -e after command.",
                type: 5,
                required: false
            }
        ],
    },    
    convert: {
        execute: convertCmd,
        description: 'Does some basic math for you using the expression provided.',
        category: 'Productivity',
        options: [
            {
                name: "from_unit",
                description: "Convert from the unit.",
                type: 3,
                choices: [
                    { name: "Kilometers", value: "kilometers" },
                    { name: "Meters", value: "meters" },
                    { name: "Miles", value: "miles" }
                ],
                required: true
            },
            {
                name: "to_unit",
                description: "Convert into the unit.",
                type: 3,
                choices: [
                    { name: "Kilometers", value: "kilometers" },
                    { name: "Meters", value: "meters" },
                    { name: "Miles", value: "miles" }
                ],
                required: true
            },
            {
                name: "value",
                description: "The value to convert.",
                type: 10, // Any double between -2^53 and 2^53
                required: true
            }
        ],
    },    
    math: {
        execute: mathCmd,
        description: 'Does some basic math for you using the expression provided.',
        category: 'Productivity',
        options: [
            {
                "name": "expression",
                "description": "The expression to evaluate.",
                "type": 3,
                "required": true
            }
        ],
    },
    define: {
        execute: defineCmd,
        description: 'Returns the definition of an English word.',
        category: 'Utility',
        options: [
            {
                "name": "word",
                "description": "The word to look definition of",
                "type": 3,
                "required": true
            }
        ],
    },
    pfp: {
        execute: pfpCmd,
        description: 'Displays the profile picture of a user.',
        category: 'Utility',
        options: [
            {
                "name": "user",
                "description": "Mention a user to check profile picture.",
                "type": 6, // 6 is for USER (mentions)
                "required": false
            }
        ],
    },
    poll: {
        execute: pollCmd,
        description: 'Starts a poll on a topic.',
        category: 'Utility',
        options: [
            {
                "name": "topic",
                "description": "Topic of the poll.",
                "type": 3,
                "required": true
            },
            {
                "name": "options",
                "description": "Poll options separated by pipe operator | ",
                "type": 3,
                "required": true
            }
        ],
    },
    userinfo: {
        execute: userInfoCmd,
        description: 'Displays the detailed information of a user.',
        category: 'Utility',
        options: [
            {
                "name": "user",
                "description": "Name of user to display information of.",
                "type": 6,
                "required": false
            }
        ],
    },
};

export default commandList;
