module.exports = {
	name: 'unmute',
	description: 'unmutes a mentioned user',
	execute(message, args) {
    //the only reason i've not done this for other modules yet is because i'm lazy

    //Turns the mentioned member into 'member'.
    let member = message.mentions.members.first();

    //permission check and replies.
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You cannot unmute members since you don't have the MANAGE_ROLES permission.")
    if(!member) return message.reply("The user you have mentioned is invalid.");

    //finds and adds the role to the mentioned user.
    let role = message.guild.roles.cache.find(role => role.name === "muted");
		member.roles.remove(role);

    //private messages the mentioned members
    member.send(`You have been unmuted in **${message.guild.name}**!`)

    //embed
    message.channel.send( { embed: {
        color: 0x9900FF,

        title: `**${member.displayName}** has been unmuted.`,

        description: `Yay they have been unmuted!!`,

        footer: {
            text: `Unmute issued by: ${message.author.tag}`,
            icon_url: message.author.displayAvatarURL(),
            },

        thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
            },
            fields: [
                {
                    //Field 1
                    name: '**Status**',
                    value: `Unmuted!`,
                    inline: true,
              },
            ],
          },
      });
    }
}
