module.exports = {
	name: 'quote',
	description: 'Quote from Clockwork orange',
	execute(message, args) {
		message.channel.send('I know only one quote, but a good one: Eggiweggs!');
	},
};