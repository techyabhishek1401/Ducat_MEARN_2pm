 const Logger=require('./logger');
let logger=new Logger();

logger.on('messageLogged',(socket)=>{
     console.log('Message is logged');
})

setTimeout(()=>{
     logger.log('Hi im logging something')
},3000);
