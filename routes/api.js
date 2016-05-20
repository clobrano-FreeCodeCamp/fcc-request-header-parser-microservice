var express = require('express');
var accepts = require('accepts')
var parser = require('ua-parser-js');
var get_ip = require('ipware')().get_ip;
var router = express.Router();

router.get('/whoami', function(req, res) {
    var json = {};
    json.ipaddress = get_ip(req).clientIp;

    var acp = accepts(req);
    json.language = acp.language(acp.languages());

    var ua = parser(req.headers["user-agent"]);
    json.software = ua.os.name + ' ' + ua.os.version;
    res.send(json);
});

module.exports = router;
