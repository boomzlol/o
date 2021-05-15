module.exports = {
    info: {
        name: "example",
        description: "This is an Example Command",
        usage: "",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
        message.channel.send("This is a example command")
    }
}
