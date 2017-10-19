
function helloworld(){
    var http=require('http');
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello World\n');
    }).listen(3000);
    conosole.log('Server running at http://localhost:3000/');
}


// export function helloworld