const express=require('express');
const Joi = require('joi');
const app=express();
app.use(express.json());
const cources=[
    {id:'1',name:"Javascript"},
    {id:'2',name:"MEAN"},
    {id:'3',name:"MERN"}
]
app.get('/',(req,res)=>{
    res.send('welcome to express');
})
app.get('/api/cources',(req,res)=>{
    res.send(cources)
});

app.get('/api/cources/:id',(req,res)=>{
    let cource=cources.find(cust=>cust.id==req.params.id);
     if(!cource){
     return  res.status(404).send('Cource Not Found');
     }
    res.send(cource)
}) 

app.post('/api/cources',(req,res)=>{
let new_cource={
                 id:cources.length+1,
                 name:req.body.name
                }
cources.push(new_cource)  
 res.send(cources)
})

app.put('/api/cources/:id',(req,res)=>{
//find the cource
//if not found return 404
let cource=cources.find(cust=>cust.id==req.params.id);
if(!cource){
    return  res.status(404).send('Cource Not Found');
}

const schema={
    name:Joi.string().min(3).required()
}
const result=Joi.validate(req.body,schema)
// if(!req.body.name || req.body.name.length<3){
//     return res.send('Not valid name')
// }
//update record
if(result.error){
  return  res.status(401).send(result.error.details[0].message)
}

//send the record
cource.name=req.body.name;
res.send(cources);

})
app.listen(8080,()=>{
    console.log('server is running at port 8080')
})