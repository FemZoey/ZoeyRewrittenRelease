module.exports = {
	name: 'greenify',
	description: '4chan green text',
	execute(message, args) {

    //text stuff
    const empty = '‎ ';
    const text = message.content.split(' ').slice(1);
    const textFinal = text.slice(0).join(' ')
    message.delete()

    //embed
    message.channel.send( { embed: {
        color: 0x00BF00,

        title: `**${message.author.tag} has used greentext:**`,

        description: `${empty}${textFinal}`,
      }
    })
  }
}
