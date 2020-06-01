module.exports = {
	name: 'clockwork',
	description: 'Basic info about Clockwork Orange',
	execute(message, args) {
		message.channel.send('In 1976, the novel A Clockwork Orange was removed from a high school in Aurora, Colorado, because of “objectionable language.” A year later, a high school in Westport, Massachusetts, did the same. In 1973, a bookseller was arrested for selling the novel.');
	},
};