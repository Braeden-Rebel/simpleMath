const http = require('node:http');
const fs = require('node:fs')
const path = require('node:path')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("REQUEST: " + req.url)
  var requestPath = req.url;
  var pathExt = path.extname(requestPath);
  // File request
  if (requestPath == "/" || requestPath == "/index.html")
  {
    showIndex(res);
  }
  else if (pathExt == ".css")
  {
    showStyle(res, requestPath);
  }
  else if (pathExt == ".js")
  {
    showScript(res, requestPath);
  }
  else
  {
    console.error("No file found with path");
    console.error(requestPath);
    res.responseCode = 404;
    res.end();
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function showIndex(res)
{
  fs.readFile("../client-side/index.html", (err, file) =>
  {
    if (err)
    {
      console.error("Cannot get index!")
      console.error("Given error:\n" + err)
      res.responseCode = 404;
      res.end();
    }
    else
    {
      console.log("Index found!")
      res.responseCode = 200;
      res.write(file);
      res.end();
    }
  });
}

function showStyle(res, requestPath)
{
  fs.readFile("../client-side" + requestPath, (err, file) =>
  {
    if (err)
    {
      console.error("Cannot get style! Given error:\n" + err)
      res.responseCode = 404;
      res.end();
    }
    else
    {
      console.log("Style found!")
      res.responseCode = 200;
      res.write(file);
      res.end();
    }
  });
}

function showScript(res, requestPath)
{
  fs.readFile("../client-side" + requestPath, (err, file) =>
  {
    if (err)
    {
      console.error("Cannot get script! Given error:\n" + err)
      res.responseCode = 404;
      res.end();
    }
    else
    {
      console.log("Script found!")
      res.responseCode = 200;
      res.setHeader("Content-Type", "text/javascript")
      res.write(file);
      res.end();
    }
  });
}