const http = require('http')
// const server=http.createServer((req,res)=>{
//     res.end("My server send hii")
// })
const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})
        //res.writeHead(200,{'content-type':'application/json'})
        res.write('<h1> Welcome to home page<h1>')
        res.end()
    } else if(req.url==="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> This is about page<h1>')
        res.end()
    }else if(req.url==="/contact"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> contact us<h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type' : 'text/html'})
        res.write('<h3>No response found 404 error</h3>')
        res.end()
    }
    //console.log("server is up and running")
})
server.listen(3005,()=>{
    console.log("server is up and running")
})
//console.log(server)