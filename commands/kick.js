module.exports = {
	name: 'kick',
	description: 'kicks a mentioned user',
	execute(message, args) {
//it's easier to copy paste this and change args

//there is a bug with empty messages crashing the bot, so i added an empty character.
//if you don't provide a reason the embed will be classified as empty therefore
//crashing the bot for having a empty embed which is agaisn't discord's code.
//error: RangeError [EMBED_FIELD_VALUE]: MessageEmbed field values may not be empty.
  const empty = '‎ ';

    //member is for kick, user is for messaging.
     let member = message.mentions.members.first();
     let user = message.mentions.users.first();

     //lol this is for the kick part
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You cannot kick members since you don't have the KICK_MEMBERS permission.")
            if(!member) return message.reply("The user you have mentioned is invalid.");
            if(!member.kickable) return message.reply("This member has a higher permission level. So they can't be kicked.");
            const reason = message.content.split(' ').slice(1);
            const reasonfinal = reason.slice(1).join(' ');

      //message and user kick.
      user.send(`You have been kicked from **${message.guild.name}** for **${reasonfinal}**.`)

      //i had to add a timeout otherwise discord wouldn't be able to dm the user.
      setTimeout(function(){
      member.kick({ reasonfinal });
      }, 1000); //ms that the kick will be delayed

      //embed
      message.channel.send( { embed: {
          color: 0x9900FF,

          title: `**${member.displayName}** has been kicked.`,

          description: `What did they even do?`,

          footer: {
              text: `Kick issued by: ${message.author.tag}`,
              icon_url: message.author.displayAvatarURL(),
              },

          thumbnail: {
              url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
              },
              fields: [
                  {
                      //Field 1
                      name: '**Kick Reason:**',
                      value: `${empty}${reasonfinal}`,
                      inline: true,
                    },
                	],
								},
					});
     }
}
