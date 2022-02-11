const Discord = require("discord.js");
const Client = new Discord.Client({
     intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "+";

Client.login(process.env.TOKEN)

Client.on("messageCreate", message => {
    if(message.content === "bouton"){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("bu23tt88on")
            .setLabel("Appuyez-içi")
            .setStyle("DANGER")
            .setEmoji("👍")
        ).addComponents(new Discord.MessageButton()
            .setLabel("Clique-içi pour être redirigé sur ma chaine YouTube")
            .setStyle("LINK")
            .setEmoji("💻")
            .setURL("https://www.youtube.com/channel/UCv_CFqKlr9IGXREswCqB6sw")
        );

        message.channel.send({content: "message avec un bouton", components: [row]});
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bu23tt88on"){
            interaction.reply("Merci d'avoir interragis avec moi");
        }
    }
});

Client.on("messageCreate", message => {

    if (message.author.bot) return;
    if(message.channel.type == "DM") return;

    if(message.content === prefix + "help"){
        message.reply("Je t'invite à ouvrir un ticket où à allez dans le salon aide pour en savoir plus")
    }

    if(message.content === prefix + "ip omega"){
        message.reply("L'ip de notre serveur Oméga est: omegarp.ml")
    }

    if (message.content === prefix + "ip site"){
        message.reply("L'IP de notre site Internet est: omegapvp.rf.gd")
    }

});

Client.on("ready", async () => {
    Client.user.setStatus("dnd");
     setTimeout(() => {
          Client.user.setActivity("Alynia PvP", {type: "PLAYING"} );
     }, 100)
    console.log("Le Bot Est En Ligne");
});

Client.on("ready", () => {
    console.log("Le bot est vraiment en ligne")
});
