module.exports = {
	name: 'purge',
	description: 'deletes messages',
	execute(message, args) {
    //permission check and replies.
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You cannot mute members since you don't have the MANAGE_MESSAGES permission.")

    //amount Stuff.
    var amount = parseInt(args[0])
    if (!amount) return message.channel.send("Please tell me the number of messages you want me to delete.")
    if (amount > 100 || amount < 1) return message.channel.send("Please select a number from 1 to 100.")

    //bulk delete parseInt
    message.delete();
    message.channel.bulkDelete(amount);

    //embed
    message.channel.send( { embed: {
        color: 0x9900FF,

        title: `**${amount}** messages have been purged.`,

        description: `What are we hiding?`,

        footer: {
            text: `Purge issued by: ${message.author.tag}`,
            icon_url: message.author.displayAvatarURL(),
            },

        thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
            },
            fields: [
                {
                    //Field 1
                    name: '**Status:**',
                    value: `Purge Complete!`,
                    inline: true,
              },
            ],
          },
      });
    }
}
