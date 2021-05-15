module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Pika Development", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    status: "idle",//can be dnd, idle, online, invisible
  });
};
