const express=require('express');
const router=express.Router();
const Joi = require('joi');

const cources=[
    {id:'1',name:"Javascript"},
    {id:'2',name:"MEAN"},
    {id:'3',name:"MERN"}
]

router.get('/',(req,res)=>{
    res.send(cources)
});

router.get('/:id',(req,res)=>{
    let cource=cources.find(cust=>cust.id==req.params.id);
     if(!cource){
     return  res.status(404).send('Cource Not Found');
     }
    res.send(cource)
}) 

router.post('/',(req,res)=>{
let new_cource={
                 id:cources.length+1,
                 name:req.body.name
                }
cources.push(new_cource)  
 res.send(cources)
})

router.put('/:id',(req,res)=>{
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

});

router.delete('/:id',(req,res)=>{
    //find if record exists or not
    //if not return 404
    let cource=cources.find(cust=>cust.id==req.params.id);
  if(!cource){
    return  res.status(404).send('Cource Not Found');
   }

    let courceIndex=cources.indexOf(cource);
    cources.splice(courceIndex,1);
  res.send(cource)

    //delete
    //send delete record
});


module.exports =router;