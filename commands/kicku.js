module.exports = {
	name: 'kicku',
	description: 'kicks a mentioned user',
	execute(message, args) {
    //turns the mentioned user into userinfoget
    let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)

    //embed
    message.channel.send({ embed: {
        color: 0x9900FF,

        title: `**KICKS INCOMING!**`,

        description: `*${message.author} kicks ${userinfoget}*`,

        footer: {
            text: 'SUCH A VIOLENT INTERACTION!!',
            icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
            },
        image: {
            url: 'https://c.tenor.com/4zwRLrLMGm8AAAAC/chifuyu-chifuyu-kick.gif',
            },
          },
      });
    }
}
