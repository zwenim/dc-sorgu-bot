const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
module.exports = {
	name: "ping", //the command name for the Slash Command
	description: "Gives you information on how fast the Bot is", //the command description for Slash Command Overview
	cooldown: 1,
	memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
	requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
	alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
	options: [ //OPTIONAL OPTIONS, make the array empty / dont add this option if you don't need options!	
		{ "StringChoices": { name: "what_ping", description: "What Ping do you want to get?", required: true, choices: [["Bot", "botping"], ["Discord Api", "api"]] } }, //here the second array input MUST BE A STRING // TO USE IN THE CODE: interacton.getString("what_ping")
	],//Created By Zwen
	run: async (client, interaction) => {
		try {
			const { member, channelId, guildId, applicationId,
				commandName, deferred, replied, ephemeral,
				options, id, createdTimestamp
			} = interaction;//Created By Zwen
			const { guild } = member;
			const StringOption = options.getString("what_ping"); //same as in StringChoices

			if (StringOption == "botping") {
				await interaction.reply({ content: `Getting the Bot Ping...`, ephemeral: true });
				interaction.editReply({ content: `Bot Ping: \`${Math.floor((Date.now() - createdTimestamp) - 2 * Math.floor(client.ws.ping))} ms\``, ephemeral: true })
			}
			//Other Option is API so we are alright
			else {
				interaction.reply({ content: `Api Ping: \`${Math.floor(client.ws.ping)} ms\``, ephemeral: true })
			}//Created By Zwen
		} catch (e) {
			console.log(String(e.stack).bgRed)
		}
	}//Created By Zwen
}