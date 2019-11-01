const Discord = require('discord.js');
const client = new Discord.Client();

//--------bot start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//--------code
client.on('guildMemberAdd', member => {
	member.send('Wlecome to CADS Crew, please read the <#416062965054308353> and <#416102715039547401> to receive rank. \n Also you can follow us on Instagram @cads_crew ');
})

//--------get token
client.login(process.env.token);