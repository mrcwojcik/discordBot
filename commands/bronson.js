module.exports = {
	name: 'bronson',
	description: 'Tag a member and do a Bronson.',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('https://youtu.be/BF5Dtf7u6tQ');
		}

		const taggedUser = message.mentions.users.first();
    message.react('😄')
    message.channel.send(`https://youtu.be/BF5Dtf7u6tQ <@${taggedUser.id}>`);
	},
};