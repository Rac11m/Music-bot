const {Client, Intents} = require("discord.js");

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', () => {
    console.log('BastardBot is online!');
});











client.login('ODk4NzA2ODcxOTQ5NTkwNTQ4.YWoH_w.vNrbDs8lKuCPSgT1rqUybN8CTdY');


