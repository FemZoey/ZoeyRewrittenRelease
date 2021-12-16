const fs = require('fs');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

const client = new Discord.Client();
const { token, prefix, version} = require('./import.json');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log(`Welcome to Zoey ${version}`);
	client.user.setPresence({
		activity: {
			name: `${prefix} || ${version} || Currently Being Dum in ${client.guilds.cache.size} guilds`,
			type: 'PLAYING',
		},
		status: 'dnd'
	})
})

client.on("guildMemberAdd", (guild, member) => {
    member.guild.systemChannel(`**${member.user.username}** has joined **${guild.name}**`);
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('this command could not be executed.');
	}
	// ...
});

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(token);
