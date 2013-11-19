var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000,
    ip: process.env.IP,
    db: process.env.MONGOHQ_URL
}