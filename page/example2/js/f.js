define(['append', 'g'], function (append, g) {
    console.log("append f is loaded");
    return () => {
        append("我是组件F");
        g();
    }
})