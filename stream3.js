var through = require('through2');

var stream = through(function(buf, encoding, next) {
	this.push(buf.toString().toUpperCase());
	next();
});

process.stdin.pipe(stream).pipe(process.stdout);