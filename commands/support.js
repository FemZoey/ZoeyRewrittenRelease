module.exports = {
	name: 'support',
	description: 'provides the user with ways to get support for zoey bot',
	execute(message, args) {
        message.author.send({ embed: {
            color: 0x9900FF,

            title: `**Support for Zoey Bot**`,

            description: `Heya, here are some links where you can get support.`,

            footer: {
                text: 'Made with love by Zoey#8685.',
                icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
                },
                fields: [
                    {
                        //Field 1
                        name: '**Discord Tag:**',
                        value: `Zoey#8685`,
                        inline: true,
                    },
                    {
                        //Field 2
                        name: '**Github:**',
                        value: `https://github.com/FemZoey`,
                        inline: true,
                    },
                    {
                        //Field 3
                        name: '**Or:**',
                        value: `Use !dm to dm your issue!`,
                        inline: true,
                    },
                ],
            }
        })
    }
}