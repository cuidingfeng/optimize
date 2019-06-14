define(['append'], function (append) {
    console.log("append g is loaded");
    return () => append("我是组件G");
})