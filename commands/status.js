module.exports = {
	name: 'status',
	description: 'sends a message if the bot is online',
	execute(message, args) {
		message.channel.send(`**${message.guild.name}**'s Zoey Bot is currently working and online, otherwise it wouldn't send this message.`)
	}
}
