module.exports = {
	name: 'chainTime',
	description: 'Chain details',
	execute(message, args) {
		message.channel.send('Mandatory chains take place on Wednesday and Saturday at 22TCT');
	},
};