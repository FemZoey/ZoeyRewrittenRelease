const Discord = require('discord.js')
const client = new Discord.Client();

let date = new Date();
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

const botid = "913515488011780116"

module.exports = {
	name: 'message',
	execute(message) {
        console.log((`${time} | ${message.author.tag} in #${message.channel.name} : ${message.content}`));
        if(message.author.id == botid) {
            return;
        }
        if  (message.channel.type === 'dm') {
            setTimeout(function(){
            message.channel.send({ embed: {
                color: 0x9900FF,

                title: `Most features are disabled in DMS.`,

                description: `You sent:\n "${message.content}"`,

                thumbnail: {
                    url: message.author.avatarURL(),
                        },

                    footer: {
                        text: 'Sent with love by Zoey#8685.',
                        icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
                        },
                    }
                })
            }, 5000); //ms that the message will be delayed
        }
        else if (message.guild.id === '895729475512332289') {
            const channel = message.guild.channels.cache.get('896816107858571294')
            channel.send({ embed: {
                color: 0x9900FF,

								footer: {
					          text: `Message Sent at ${time} in #${message.channel.name}`,
					          icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
					            },

                title: `${message.author.tag}:`,

                description: `${message.content}`,

                thumbnail: {
                    url: message.author.avatarURL(),
                    }
                }
            })
        }
    }
}
