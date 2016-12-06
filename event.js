var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

// listem for error event - can listen for error, warn, info messages
logger.on('error',function(message){
	console.log('Err: ' + message);
});

logger.emit('error', 'Spilled Milk'); 