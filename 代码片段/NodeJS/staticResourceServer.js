const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 8080;
const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);
    console.log("pathname",pathname);
    if (pathname === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        const htmlpath = path.join(__dirname, pathname, "index.html");
        console.log("htmlpath",htmlpath);
        res.end(fs.writeFileSync(htmlpath));
    } else if ([".jpg", ".png"].includes(extname)) {
        res.writeHead(200, {
            "Content-Type": "image/" + extname.substring(1)
        });
        res.end(fs.writeFileSync(path.join(__dirname, pathname)));
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});