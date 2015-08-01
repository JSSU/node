var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

request('http://www.learnjavaeasy.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('learnjavaeasy.html.gz'));
