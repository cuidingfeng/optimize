define(['./append', './e', './f'], function (append, e, f) {
    console.log("append d is loaded");
    return () => {
        append("我是组件D");
        e();
        f();
    }
})