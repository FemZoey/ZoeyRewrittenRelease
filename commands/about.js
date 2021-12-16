const { version, prefix, developer } = require('./import.json');

module.exports = {
	name: 'about',
	description: 'shows the version and developer info for zoey bot',
	execute(message, args) {
        message.channel.send({ embed: {
            color: 0x9900FF,

            title: `**About Zoey Bot ${version}:**`,

            description: `All about Zoey Bot!`,

            footer: {
                text: 'Made with love by Zoey#8685.',
                icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
                },

            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
                },
                fields: [
                    {
                        //Field 1
                        name: '**Version:**',
                        value: `${version}`,
                        inline: true,
                    },
                    {
                        //Field 2
                        name: '**Prefix:**',
                        value: `${prefix}`,
                        inline: true,
                    },
                    {
                        //Field 3
                        name: '**Developed By:**',
                        value: `${developer}`,
                        inline: true,
                    },
                	],
								},
					});
     }
}
