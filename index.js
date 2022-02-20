const Discord = require("discord.js");
const Client = new Discord.Client({
     intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "+";

Client.login(process.env.TOKEN);

Client.on("messageCreate", message => {
    if(message.content === prefix + "bouton youtube"){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setLabel("Clique içi pour être redirigé(e) sur la chaîne YouTube de Loxstazz")
            .setStyle("LINK")
            .setEmoji("💻")
            .setURL("https://bit.ly/3GGWpzd")
        )
        message.channel.send({content: "__Voici la chaines YouTube du Fondateur__", components: [row]});
    }
});

Client.on("messageCreate", message => {

    if(message.author.bot) return;
    if(message.channel.type == "DM") return;

});

Client.on("ready", async () => {
    console.log("Veuillez patientez ...");
    Client.user.setStatus("dnd");
     setTimeout(() => {
          Client.user.setActivity("OuiOui, sur Netflix", {type: "PLAYING"} );
     }, 100)

});

Client.on("ready", () => {
    console.log("Le bot est en ligne")
});
