module.exports = {
	name: 'avatar',
	description: 'sends an users avatar.',
  execute(message, args) {
    //makes the mentioned user into userinfoget
    let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);

    message.channel.send(`${userinfoget.user.displayAvatarURL()}`)
  }
}
