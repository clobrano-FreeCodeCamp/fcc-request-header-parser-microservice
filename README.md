# fcc-request-header-parser-microservice
Free Code Camp Backend challenge

User Story: I can get the IP address, language and operating system for my browser.

* address: I'm using express js, so
    - add app.enable('trust proxy'); to the initialization code
    - get IP with req.ip or req.ips

    Update: This actually didn't work. Used ipware module

* language: use accepts module;

* operating system: use ua-parser-js module.


Live demo on heroku https://req-headers-parser.herokuapp.com/api/whoami
