define(['./append'], function (append) {
    console.log("append b is loaded");
    return () => append("我是组件B");
})