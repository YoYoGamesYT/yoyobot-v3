const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "Y!";
const prefix = "Y!";

var randnum = 0;

bot.login("NTU3OTI1NDA4NjYyNzQ5MTk2.D3Pjjg.nerzwmps1xrcmWfN4zkSIUSo-U4");

bot.on("ready", function() {
    console.log("Je suis prêt !");
});

bot.on("ready", () => {
    bot.user.setActivity("Y!help | YoYo-BOT", {type: "WATCHING"});
});

bot.on('message', message => {
	if (message.content === ("test")){
        message.reply('Test !');
    }});

bot.on('message', message => {
    if (message.content === ("re")){
        message.reply('Re !');
    }});
    
bot.on('message', message => {
    if (message.content === ("bonjour")){
        message.reply('Bonjour à toi !');
    }
});

bot.on('message', message => {
    if (message.content === ("salut")){
        message.reply('Salut à toi !');
    }
});

bot.on('message', message => {
    if (message.content === ("coucou")){
        message.reply('Coucou !');
    }
});

bot.on('message', message => {
    if (message.content === ("yo")){
        message.reply('Yo !');
    }
});

bot.on('message', message => {
    if (message.content === ("hey")){
        message.reply('Hey !');
    }
});

bot.on('message', message => {
    if (message.content === 'koi') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'Koi') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'koi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'Koi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'quoi') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'quoi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
    if (message.content === 'Quoi ?') {
        message.channel.sendMessage('feur xD');
  }
});

bot.on('message', message => {
  if (message.content === ("salut")){
      message.reply('Salut à toi !');
  }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${PREFIX}shifumi`){
  
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .addField(":raised_hand: :v: :fist: Shifumi","Ce magnifique jeu qui fait passer le temps x)")
      .addField("Fait Y!pierre :fist:", "pour jouer pierre :)")
      .addField("ou Y!feuille :raised_hand:", "pour jouer feuille :3")
      .addField("ou Y!ciseaux :v:", "pour jouer ciseaux :D")
      .addField(":tada: Amuse toi bien", "Ce jeu est tout nouveau ^^ ( ou pas xD )")
      .setColor("f6ff00")
      .setFooter("By YoYo", message.author.avatarURL)
      .setTimestamp()
  
      return message.channel.send(serverembed);
    }

    if (message.content === "Y!feuille"){
      random();
    
      if (randnum == 3){
          message.reply("Ciseaux !")
          console.log(randnum);
      }
    
      if (randnum == 1){
          message.reply("Feuille !")
          console.log(randnum);
      }
    
      if (randnum == 2){
          message.reply("Pierre !");
          console.log(randnum);
      }
    
    }
    
    function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
    }

    if (message.content === "Y!pierre"){
      random();
    
      if (randnum == 3){
          message.reply("Ciseaux !")
          console.log(randnum);
      }
    
      if (randnum == 1){
          message.reply("Feuille !")
          console.log(randnum);
      }
    
      if (randnum == 2){
          message.reply("Pierre !");
          console.log(randnum);
      }
    
    }

    if (message.content === "Y!ciseaux"){
      random();
    
      if (randnum == 3){
          message.reply("Ciseaux !")
          console.log(randnum);
      }
    
      if (randnum == 1){
          message.reply("Feuille !")
          console.log(randnum);
      }
    
      if (randnum == 2){
          message.reply("Pierre !");
          console.log(randnum);
      }
    
    }

    if(cmd === `${PREFIX}clear`){
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Tu n\'as pas les perms petit fifou ;) !'); }
    if (!args[0]) { return message.channel.send('Vous devez spécifier un nombre de messages à supprimer !'); }
    else if (isNaN(args[0])) { return message.channel.send('Veuillez spécifier un nombre !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`**${messages.size}** messages ont été supprimés !`);
            });

module.exports.help = {
    name: 'clear'
};

    if(cmd === `${PREFIX}infoserv`){
  
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Informations du serveur")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Nom du serveur", message.guild.name)
      .addField("Créer le", message.guild.createdAt)
      .addField("Tu as rejoins le", message.member.joinedAt)
      .addField("Membres total", message.guild.memberCount);
  
      return message.channel.send(serverembed);
    }

    if(cmd === `${PREFIX}infobot`){
  
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Informations du BOT")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Nom du BOT", bot.user.username)
      .addField("Créer le", bot.user.createdAt);
  
      return message.channel.send(botembed);
    }

    if(cmd === `${PREFIX}help`){

        let serverembed = new Discord.RichEmbed()
        .setDescription(":hammer_pick: Liste des commandes demander :")
        .setColor("04B404")
        .addField(":question: Utilitaires","Y!utile")
        .addField(":baby_chick: Résaux sociaux","Y!contact")
        .addField(":crossed_swords: Modération","Y!mod")
        .addField(":joy: Fun","Y!fun")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}invite`){

        let serverembed = new Discord.RichEmbed()
            .addField(":beginner: Invitation","[MON INVITATION](https://discordapp.com/oauth2/authorize?client_id=424592059316437002&scope=bot&permissions=2146958591)")
            .setColor("0174DF")
            .setFooter("By YoYo", message.author.avatarURL)
            .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}createur`){

        let serverembed = new Discord.RichEmbed()
        .addField(":trophy: Créateur","YoYoGames [LA CHAINE YT DU CREATEUR](https://www.youtube.com/channel/UCHBnjPXWM5b3vJz4Onh_xMQ/featured)")
        .setColor("0174DF")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}youtube`){

        let serverembed = new Discord.RichEmbed()
        .addField(":microphone2: YouTube","[MA CHAINE YOUTUBE](https://www.youtube.com/channel/UCOt28-LKGOfBcl_rvXW8K1Q/featured)")
        .setColor("FF0000")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}twitter`){

        let serverembed = new Discord.RichEmbed()
        .addField(":bird: Twitter","[MON COMPTE TWITTER](https://twitter.com/YoYoGamesCraft)")
        .setColor("2E9AFE")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}fun`){

        let serverembed = new Discord.RichEmbed()
        .setColor("ffe400")
        .addField(":joy: Fun","Y!shifumi")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}mod`){

        let serverembed = new Discord.RichEmbed()
        .setColor("ff0000")
        .addField(":crossed_swords:Modération","Y!report \nY!kick \nY!ban \nY!mute \nY!unmute")
        .setFooter("By YoYo", message.author.avatarURL)
        .setTimestamp()
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}contact`){

        let serverembed = new Discord.RichEmbed()
        .setColor("00c0ff")
        .addField(":baby_chick: Résaux sociaux","Y!twitter \nY!youtube \nY!don")
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}utile`){

        let serverembed = new Discord.RichEmbed()
        .setColor("00c0ff")
        .addField(":question: Utilitaires","Y!help \nY!invite \nY!createur \nY!serverinfo \nY!botinfo \nY!ping")
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}don`){

        let serverembed = new Discord.RichEmbed()
        .setColor("fffc00")
        .addField(":moneybag: Paypal","[MON PAYPAL](https://www.paypal.me/YoYoGames)")
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
    
        return message.channel.send(serverembed);
      }

      if(cmd === `${PREFIX}ping`){
        var embed = new Discord.RichEmbed()
        .setColor("E80B3E")
        .setTitle("Voici le ping du bot")
        .addField(":ping_pong: " + Math.round(client.ping) + " ms.",(""))
        .setTimestamp()
        .setFooter("By YoYo", message.author.avatarURL)
            message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "changeprefix")){
        if(message.member.permissions.has('ADMINISTRATOR')){
            if(!args[1]) return message.reply("Met un prefix");
                prefix = args[1]
                message.reply("Le préfix a bien été changer");
        }

        if (message.content.startsWith(prefix + "say")) {
            var msg = message.content.substr('4')
            message.delete(message.author);
            message.channel.send(msg);
        }
    }

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "join-leave-bye").send(`Bienvenue ${member} !`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "join-leave-bye").send(`${member} viens de quitter !`)
})

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Arrivant 🖐');
    member.addRole(role)
})
  });
