const fs=require('fs');

fs.readFile('./test.html','UTF-8' ,(err, data) => {
   if(err){
    console.log("err:",err); 
   }
    console.log("data:",data);
  });


  fs.writeFile('message.txt', 'Hi', (err) => {
    if (err) console.log(err);
    console.log('The file has been saved!');
  });