define(['./append'], function (append) {
    console.log("append c is loaded");
    return () => append("我是组件C");
})