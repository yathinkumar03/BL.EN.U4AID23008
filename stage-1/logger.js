const fs = require("fs");
function log(message) {
    const time = new Date().toISOString();
    const logMessage = `[${time}] ${message}\n`;
    fs.appendFileSync("app.log",'[${time}] ${message}\n');
}
module.exports = log;