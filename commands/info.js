module.exports = {
  name: "info",
  description: "Basic info about discord bot",
  execute(message, args) {
    message.channel.send({
      embed: {
        color: 3447003,
        title:
          "Hello. My name is Stanley and I am personal bot of Clockwork Orange Faction.",
        description:
          "I want to explain you, what I am capable of. Here you can find list of commands which I serve. I also have access to the fridge.",
        fields: [
          {
            name: "!bronson <@DiscordUser>",
            value: "Shut your fucking mouth!"
          },
          {
            name: "!chainTime",
            value: "If u want to know, when is our mandatory chain"
          },
          {
            name: "!clockwork",
            value: "Fun fact about Clockwork Orange by Stanley Kubrick"
          },
          {
            name: "!pizza and !food",
            value: "You know - maybe be gangster in Torn, but when I observe you guys I see you only think about food."
          },
          {
            name: "!quote",
            value: "They order me to have a quote."
          },
          {
            name: "!egg",
            value: "EGG!"
          }
        ]
      }
    });
  }
};
