var express = require('express');
var app = express();
var ejs = require('ejs');
//识别ejs代码
app.set('views', './page')
app.engine('html', ejs.__express);
app.set('view engine', 'html');


app.get('/', function (req, res) {
    res.send('Hello World');
})
app.get('/page/example1/demo1.html', function (req, res) {
    res.render('example1/demo1');
})
app.use('/page', express.static('page'));
var server = app.listen(8083, function () {

    var host = "127.0.0.1" || server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})