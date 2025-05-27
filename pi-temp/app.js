const http = require("http")
const fs = require("node:fs")
const { exec } = require("child_process")
http.createServer((req,res)=> {
   if (req.url == "/data") {
    const child = exec("vcgencmd measure_temp")
    child.stdout.pipe(res)
   } else {
    fs.readFile("./html.html", (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.write(data)
            res.end()
        }
    })
   }
}).listen(3000)