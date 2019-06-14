define(['append'], function (append) {
    console.log("append a is loaded");
    return () => append("我是组件A");
})