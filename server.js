
const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready" ,() => {
    console.log("IM NOW ONLINE");
});


client.on('message', (message) => {
    if(message.content.startsWith('Epicardo')) {
      message.channel.send("https://tenor.com/view/stronger-than-you-spanish-in-africa-stronger-than-you-stronger-than-you-gif-20324898");
    }
  
  });

  client.on('message', (message) => {
    if(message.content.startsWith('epicardo')) {
      message.channel.send("https://tenor.com/view/stronger-than-you-spanish-in-africa-stronger-than-you-stronger-than-you-gif-20324898");
    }
  
  });

  client.on('message', (message) => {
    if(message.content.startsWith('Imbecil')) {
      message.channel.send("Callado vos!!");
    }
  
  });
  
client.on('message', (message) => {
    if(message.content.startsWith('IMBECIL')) {
      message.channel.send("Callado vos!!");
    }
  
  });
  
client.on('message', (message) => {
    if(message.content.startsWith('imbecil')) {
      message.channel.send("Callado vos!!");
    }
  
  });


client.on('message', (message) => {
    if(message.content.startsWith('Hola')) {
      message.channel.send("Que tal? nuevo amigo! soy un bot hecho para mantener un grupo Educado y bien portado");
    }
  
  });


  client.on("message", (message) => {
    if(message.content.startsWith("hola")) {
        message.channel.send("Que tal? nuevo amigo! soy un bot hecho para mantener un grupo Educado y bien portado")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("hello")) {
        message.channel.send("How are you? new friend! I am a bot made to keep a group Educated and well behaved")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("Hello")) {
        message.channel.send("How are you? new friend! I am a bot made to keep a group Educated and well behaved")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("HELLO")) {
        message.channel.send("How are you? new friend! I am a bot made to keep a group Educated and well behaved")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("mierda")) {
        message.channel.send("Callate vos No digas eso!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("MIERDA")) {
        message.channel.send("Callate vos No digas eso!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Mierda")) {
        message.channel.send("Callate vos No digas eso!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("shit")) {
        message.channel.send("Dont say that!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Shit")) {
        message.channel.send("Dont say that!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("SHIT")) {
        message.channel.send("Dont say that!")
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
    if(message.content.startsWith("SHO")) {
        message.channel.send("Maleducado 😤😤")
    }

})



client.on("message", (message) => {
    if(message.content.startsWith("puta")) {
        message.channel.send("QUEEE? no digas esoo")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("fuck")) {
        message.channel.send("WHAT? DONT SAY THAT PLEASE!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Fuck")) {
        message.channel.send("WHAT? DONT SAY THAT PLEASE!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("FUCK")) {
        message.channel.send("WHAT? DONT SAY THAT PLEASE!")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("lol")) {
        message.channel.send("XD")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Lol")) {
        message.channel.send("XD")
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
    if(message.content.startsWith("ESTUPIDO")) {
        message.channel.send("Cual es la razón por la que insultan?")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("stupid")) {
        message.channel.send("🤨")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Stupid")) {
        message.channel.send("🤨")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("STUPID")) {
        message.channel.send("🤨")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("DUMB")) {
        message.channel.send("🤨")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Dumb")) {
        message.channel.send("🤨")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("dumb")) {
        message.channel.send("🤨")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("👌")) {
        message.channel.send("Nice")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("user info")) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}

})


client.on("message", (message) => {
    if(message.content.startsWith("server")) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
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
    if(message.content.startsWith("ADIOS")) {
        message.channel.send("Hasta luego amigo!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("BYE")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Bye")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("bye")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("GOODBYE")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("GoodBye")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("goodbye")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Goodbye")) {
        message.channel.send("See ya toomorrow!")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("goodBye")) {
        message.channel.send("See ya toomorrow!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Puta")) {
        message.channel.send("QUEE? no digas eso!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Cunt")) {
        message.channel.send("please Show a little respect!😫")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("cunt")) {
        message.channel.send("please Show a little respect!😫")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("CUNT")) {
        message.channel.send("please Show a little respect!😫")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("PUTA")) {
        message.channel.send("QUEE? no digas eso!")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("HOLA")) {
        message.channel.send("Que tal? nuevo amigo! soy un bot hecho para mantener un grupo Educado y bien portado")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Bastard")) {
        message.channel.send("Show a little respect.")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("bastard")) {
        message.channel.send("Show a little respect.")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("BASTARD")) {
        message.channel.send("Show a little respect.")
    }
})

client.on("message", (message) => {
    if(message.content.startsWith("hi")) {
        message.channel.send("How are you? new friend! I am a bot made to keep a group Educated and well behaved")
    }

})


client.on("message", (message) => {
    if(message.content.startsWith("Hi")) {
        message.channel.send("How are you? new friend! I am a bot made to keep a group Educated and well behaved")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("HI")) {
        message.channel.send("How are you? new friend! I am a bot made to keep a group Educated and well behaved")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Dick")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("DICK")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("dick")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("ass")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Ass")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("ASS")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Piss off")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("piss off")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Pissoff")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("PissOff")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("pissoff")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("pissOff")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("PISS OFF")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("PISS off")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Piss OFF")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("PISSOFF")) {
        message.channel.send("Don't say that its rude")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("PISSoff")) {
        message.channel.send("Don't say that its rude")
    }

})

client.on("message", (message) => {
    if(message.content.startsWith("Son of a bi")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("son of a bi")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("SON OF A bi")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Son of A bi")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("SON OF a bi")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("bitch")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("Bitch")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.on("message", (message) => {
    if(message.content.startsWith("BITCH")) {
        message.channel.send("That's it stop rigth now! ")
    }

})
client.login(NzYyNjk5MTY2MDIyNTAwMzUy.X3s88w.zrFAlt_73Uup_l7RbkgAcQj2Qdo);