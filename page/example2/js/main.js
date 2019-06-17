//require('../css/style1.css');
define(['./a', './b', './c', './d'], function (a, b, c, d) {
    a();
    b();
    c();
    d();
    a();
    b();
    a();
})