var through = require('through2');
var split = require('split');

var c = 0;
var stream = through(function(buf, encoding, next) {
	if (c % 2 != 0) {
		this.push(buf.toString().toUpperCase() + '\n');
	} else {
		this.push(buf.toString().toLowerCase() + '\n');
	}
	c++;
	next();
});

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);