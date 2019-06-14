define(['append'], function (append) {
    console.log("append e is loaded");
    return () => append("我是组件E");
})