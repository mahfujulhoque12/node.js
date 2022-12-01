const http=require('http')
const fs=require('fs');
const Port=3000;
const hostName='127.0.0.1';

const server=http.createServer((req,res)=>{
    const handleReadFile=(statusCode,fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode,{'content-type':'text/html'});
            res.write(data);
            res.end();
    
        })
    }

 if(req.url==='/'){
   handleReadFile(200,"index.html")
 }
 else if(req.url==='/about'){
    handleReadFile(200,"about.html")
 }

 else if(req.url==='/contact'){
     handleReadFile(200,"contact.html")
 }
 else{
    handleReadFile(404,"error.html")
 }
})

 server.listen(Port,hostName,()=>{
    console.log(`sever  is runnig at http://${hostName}:${Port}`)
 })