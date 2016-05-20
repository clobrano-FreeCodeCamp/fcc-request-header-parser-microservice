var express = require('express');
var accepts = require('accepts')
var parser = require('ua-parser-js');
var router = express.Router();

router.get('/whoami', function(req, res) {
    var json = {};
    json.ipaddress = req.ip;

    var acp = accepts(req);
    json.language = acp.language(acp.languages());

    var ua = parser(req.headers["user-agent"]);
    json.software = ua.os.name + ' ' + ua.os.version;
    res.send(json);
});

module.exports = router;
