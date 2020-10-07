
const Discord = require("discord.js");

const client = new Discord.Client();


client.once("ready" ,() => {
    console.log("BOT ONLINE ;)");
});


client.on('message', (message) => {
    if(message.content.startsWith('imbecil')) {
      message.channel.send("Callado vos!!");
    }
  
  });


client.on('message', (message) => {
    if(message.content.startsWith('Imbecil')) {
      message.channel.send("Callado vos!!");
    }
  
  });

client.on('message', (message) => {
    if(message.content.startsWith('Hola')) {
      message.channel.send("Que tal? nuevo amigo! soy un bot hecho por Jacob para mantener un grupo Educado y bien portado");
    }
  
  });


  client.on("message", (message) => {
    if(message.content.startsWith("hola")) {
        message.channel.send("Que tal? nuevo amigo! soy un bot hecho por Jacob para mantener un grupo Educado y bien portado")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("mierda")) {
        message.channel.send("Sho vos No digas eso!")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("Mierda")) {
        message.channel.send("Sho vos No digas eso!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("sho")) {
        message.channel.send("Maleducado 😤😤")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Sho")) {
        message.channel.send("Maleducado 😤😤")
    }

})



client.on("message", (message) => {
    if(message.content.startsWith("puta")) {
        message.channel.send("QUEEE? no digas esoo")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("lol")) {
        message.channel.send("XD")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("mula")) {
        message.channel.send("Porfavor no Insultos!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Mula")) {
        message.channel.send("Porfavor no Insultos!")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("estupido")) {
        message.channel.send("Cual es la razón por la que insultan?")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("Estupido")) {
        message.channel.send("Cual es la razón por la que insultan?")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("👌")) {
        message.channel.send("Nice")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("nice")) {
        message.channel.send("🐱‍👓")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("Nice")) {
        message.channel.send("🐇💨")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("adios")) {
        message.channel.send("Hasta luego amigo!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Adios")) {
        message.channel.send("Hasta luego amigo!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Puta")) {
        message.channel.send("QUEE? no digas eso!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("@Good manners bot")) {
        message.channel.send("Sii??")
    }

})



client.login(process.env.token);


