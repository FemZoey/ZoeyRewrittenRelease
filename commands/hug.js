module.exports = {
	name: 'hug',
	description: 'hugs a mentioned user',
	execute(message, args) {
    //turns the mentioned user into userinfoget
    let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author)

    //embed
    message.channel.send({ embed: {
        color: 0x9900FF,

        title: `**HUG INCOMING!**`,

        description: `*${message.author} hugs ${userinfoget}*`,

        footer: {
            text: 'SUCH AN WHOLESOME INTERACTION!!',
            icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
            },
        image: {
            url: 'https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif',
            },
          },
      });
    }
}
