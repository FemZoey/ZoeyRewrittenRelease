const moment = require('moment');

module.exports = {
	name: 'profile',
	description: 'shows an users profile in the form of an embed',
    execute(message, args) {

        let user = message.mentions.users.first();
        if(!user) user = message.author;
        let userinfoget = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.member(message.author);

        message.channel.send({ embed: {
            color: 0x9900FF,

            title: `Showing ${user.tag} profile.`,

            description: `${user.tag} is very misterious.`,

            thumbnail: {
							url: userinfoget.user.displayAvatarURL(),
                    },

            footer: {
                text: `Requested by: ${message.author.tag}`,
                icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
                },
                fields: [
                    {
                        //Field 1
                        name: '**Discord Tag:**',
                        value: `${user.tag}`,
                        inline: true,
                    },
                    {
                        //Field 2
                        name: '**Discord ID**',
                        value: `${user.id}`,
                        inline: true,
                    },
                    {
                        //Field 3
                        name: '**Member Of:**',
                        value: `${message.guild.name}`,
                        inline: true,
                    },
                    {
                        //Field 4
                        name: '**Created At:**',
                        value: `${moment(userinfoget.user.createdAt).format('DD/MM/YY')}`,
                        inline: true,
                    },
                    {
                        //Field 5
                        name: '**Joined At:**',
                        value: `${moment(message.guild.member(user).joinedAt).format('DD/MM/YY')}`,
                        inline: true,
                    },
                ],
            }
        })
    }
}
