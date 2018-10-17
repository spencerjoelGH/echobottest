var restify = require('restify'); 
var builder = require('botbuilder');  
// Setup Restify Server 


// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});
// Create chat bot
var connector = new builder.ChatConnector
({ appId: 'd14a3195-d834-4185-8fad-21248b3d0c8a', appPassword: 'mrnrDN2+%dmsXGDPE2814~*' }); 
var bot = new builder.UniversalBot(connector,
{
	storage: new builder.MemoryBotStorage()
});
server.post('/api/messages', connector.listen());
// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});

