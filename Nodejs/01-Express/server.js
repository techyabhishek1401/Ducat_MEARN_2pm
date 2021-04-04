const express=require('express');
const courceRoute=require('./routes/cources');
const logger=require('./middleware/logger');
const morgan = require('morgan')
require('dotenv').config()
const app=express();
app.set('view engine','pug');
app.set('views','./views');
app.use(express.json());
app.use(express.static('public'));
app.use(logger);
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    // res.send('welcome to express');
    res.render('Home',{title:"Welcome",message:"Welcome to Pug"});
});

app.use('/api/cources',courceRoute);
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})