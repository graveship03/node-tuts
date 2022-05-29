const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url ==='/about'){
        res.end('About page')
    }
    res.end(`  
        <h1>OoPS!</h1>
        <a href="/">back home</a>
    `)
})

server.listen(5000)