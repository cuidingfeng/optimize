var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites-ratio');

var css = fs.readFileSync('./demo2.css', 'utf8');
var opts = {
    stylesheetPath: './',
    spritePath: './icon/',
    ratio: 200 / 36
};

postcss([sprites(opts)])
    .process(css, {
        from: './demo2.css',
        to: './demo2.dist.css'
    })
    .then(function (result) {
        fs.writeFileSync('./demo2.dist.css', result.css);
    });