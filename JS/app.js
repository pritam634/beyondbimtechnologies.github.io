const http = require('http');
const port = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
   res.writeHead(200, "content-type:text/html");
    res.end('<h2>Hello World</h2>');
});

server.listen(port, "127.0.0.1", () =>{
    console.log(`Server is running at: http://127.0.0.1:${port}`);
});