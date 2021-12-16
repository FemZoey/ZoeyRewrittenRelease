const moment = require('moment');

module.exports = {
  name:'serverinfo',
  description:'shows the info of the server the command is sent in',
  execute(message, args) {
      message.channel.send({ embed: {
          color: 0x9900FF,

          title: `Showing ${message.guild.name} server profile`,

          description: `${message.guild.name} is a very misterious server.`,

          thumbnail: {
            url: message.guild.iconURL(),
                  },

          footer: {
              text: `Requested by: ${message.author.tag}`,
              icon_url: 'https://cdn.discordapp.com/attachments/905579317608734740/913526211236483082/engranagem.png',
              },
              fields: [
                  {
                      //Field 1
                      name: '**Owned By:**',
                      value: `${message.guild.owner}`,
                      inline: true,
                  },
                  {
                      //Field 2
                      name: '**Guild ID:**',
                      value: `${message.guild.id}`,
                      inline: true,
                  },
                  {
                      //Field 3
                      name: '**Guild Name:**',
                      value: `${message.guild.name}`,
                      inline: true,
                  },
                  {
                      //Field 4
                      name: '**Member Count:**',
                      value: `${message.guild.memberCount}`,
                      inline: true,
                  },
                  {
                      //Field 5
                      name: '**Region:**',
                      value: `no longer works.`,
                      inline: true,
                  },
                  {
                      //Field 6
                      name: '**Created At:**',
                      value: `${moment.utc(message.guild.createdAt).format('DD/MM/YY')}`,
                      inline: true,
                  },
              ],
          }
      })
  }
}
