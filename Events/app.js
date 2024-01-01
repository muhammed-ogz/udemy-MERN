const events = require('events');
var eventEmitter = new events.EventEmitter();

var myFunction = function(){
    console.log("My Function isimli fonksiyon çalıştı !");
}

eventEmitter.on("myFunction_olay", myFunction);

eventEmitter.emit("myFunction_olay");