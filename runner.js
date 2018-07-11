const fs = require('fs')

var dta = {
    "jsLines": 0,
    "jsFiles": 0
}

const walkDirectory = (directory) => {
    console.log("Processing: " + directory)
    var files = fs.readdirSync(directory);
    files.forEach(function (file) {
        if (fs.statSync(directory + file).isDirectory()) {
            if (file !== ".git") {
                walkDirectory(directory + file);
            }
        } else {
            console.log("file:" + file)
            if (file.endsWith(".js")) {
                dta.jsFiles = dta.jsFiles + 1
            }
        }
    })
    console.log("jsFiles:" + dta.jsFiles)
}

var args = process.argv.slice(2)
var directory = args[0]
if (!directory) {
    console.log("Command: npm start /path/to/code")
    process.exit(-1)
}
walkDirectory(directory)