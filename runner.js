const fs = require('fs')

var dta = {
    "directories": 0,
    "files": []
}

var blockedFiles = [".DS_Store", "node_modules", ".git", "build", "bin", ".gradle", ".settings", ".vscode", "DS_Store", "BrowserStackLocal"]

const walkDirectory = (directory) => {
    console.log("Processing: " + directory)
    dta.directories++
    var files = fs.readdirSync(directory);
    files.forEach(function (file) {
        if (blockedFiles.includes(file)) { return }
        if (fs.statSync(directory + "/" + file).isDirectory()) {
            walkDirectory(directory + "/" + file);
        } else {
            var fileData = file.split(".")
            // if (fileData.length > 1 && fileData[0] !== "") {

            // }
            var extension = fileData[fileData.length - 1]

            var lines = fs.readFileSync(directory + "/" + file, 'utf-8')
                .split('\n')
                .filter(Boolean);
            if (extension == ".js") {
                lines.forEach((lne) => {
                    console.log("line:" + lne)
                })
            }
            var extFound = false
            dta.files.forEach((f) => {
                if (f.extension === extension) {
                    f.files++
                    f.lines += lines.length
                    extFound = true
                }
            })
            if (!extFound) {
                var f = {
                    "extension": extension,
                    "files": 1,
                    "lines": lines.length
                }
                dta.files.push(f)
            }

        }
    })
}

var args = process.argv.slice(2)
var directory = args[0]
if (!directory) {
    console.log("Command: npm start /path/to/code")
    process.exit(-1)
}
walkDirectory(directory)
console.log("Finished")
console.dir(dta)
