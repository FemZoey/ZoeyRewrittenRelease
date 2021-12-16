module.exports = {
	name: 'help',
	description: 'shows all the commands for Zoey Bot',
	execute(message, args) {
		if  (message.channel.type === 'dm') {
			return;
		}
		else if (message.channel.type === 'text') {
			message.channel.send({ embed: {
			color: 0x9900FF,
			title: 'Help:',

			author: {
				},

      footer: {
          text: 'Made with love by Zoey#8685.',
          icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
            },

			description: "Prefix: -",

			thumbnail: {
				url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
                    },
                    fields: [
                        {
                            //Field 1
                            name: '**Admin:**',
                            value: '``About, Help, Profile, ServerInfo.``',
                            inline: true,
                        },
                        {
                            //Field 2
                            name: '**User:**',
                            value: '``About, Avatar, ServerInfo, Support, Purge, Profile.``',
                            inline: true,
                        },
                        {
                            //Field 3
                            name: '**Roleplay:**',
                            value: '``Cuddle, Headpat, Hug, Kicku, Kiss, Pin, Punch, Snuggle, Suplex.``',
                            inline: true,
                    		},
												{
                            //Field 4
                            name: '**Text Formatting:**',
                            value: '``Greenify.``',
                            inline: true,
                    		},
                		],
								},
					});
     }
	 }
 }
