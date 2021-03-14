const http=require('http');
const url=require('url');
const fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    let req_url=url.parse(req.url,true);
     
   if(req_url.pathname=='/'){
    res.end('<h1>Welcome TO NODEJS</h1>');
   };
   if(req_url.pathname=='/home'){
       //
       fs.readFile('Home.html',(err,data)=>{
           res.write(data);
           res.end();
       })
      
   }
   else {
       res.statusCode='404'
      res.end('<h1>404 Page Not Found</h1>');       
   }

}).listen(8080);
console.log("server is listening at 8080");