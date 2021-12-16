module.exports = {
	name: 'mute',
	description: 'mutes a mentioned user',
	execute(message, args) {
    //the only reason i've not done this for other modules yet is because i'm lazy

    //there is a bug with empty messages crashing the bot, so i added an empty character.
    //if you don't provide a reason the embed will be classified as empty therefore
    //crashing the bot for having a empty embed which is agaisn't discord's code.
    //error: RangeError [EMBED_FIELD_VALUE]: MessageEmbed field values may not be empty.
      const empty = '‎ ';

    //Turns the mentioned member into 'member'.
    let member = message.mentions.members.first();


    //permission check and replies.
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You cannot mute members since you don't have the MANAGE_ROLES permission.")
    if(!member) return message.reply("The user you have mentioned is invalid.");

    //Mute Reason Stuff
    const reason = message.content.split(' ').slice(1);
    const reasonfinal = reason.slice(1).join(' ');

    //finds and adds the role to the mentioned user.
    let role = message.guild.roles.cache.find(role => role.name === "muted");
		member.roles.add(role);

    //private messages the mentioned members
    member.send(`You have been muted in **${message.guild.name}** for **${reasonfinal}**.`)

    //embed
    message.channel.send( { embed: {
        color: 0x9900FF,

        title: `**${member.displayName}** has been muted.`,

        description: `What did they even do?`,

        footer: {
            text: `Mute issued by: ${message.author.tag}`,
            icon_url: message.author.displayAvatarURL(),
            },

        thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
            },
            fields: [
                {
                    //Field 1
                    name: '**Mute Reason:**',
                    value: `${empty}${reasonfinal}`,
                    inline: true,
              },
            ],
          },
      });
    }
}
