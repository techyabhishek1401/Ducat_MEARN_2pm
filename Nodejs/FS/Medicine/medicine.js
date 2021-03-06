const fs=require('fs');

fs.readFile('./file.csv','UTF-8' ,(err, data) => {
   if(err){
    console.log("err:",err); 
   }
    let rowArray=data.split('\r\n');
    console.log(rowArray);
    let medicineArray=[];
    rowArray.map((row)=>{
      medicineArray.push(row.split(',')[1]+","+row.split(',')[4]+'\r\n')
    });
    fs.writeFile('medicine.csv',medicineArray,(err)=>{
      if(err){
        console.log('error:',err)
      }
      else console.log('success');
    })
  });