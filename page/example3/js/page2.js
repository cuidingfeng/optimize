(() => {
    const $ = (s) => document.querySelectorAll(s);
    $(".txt2").forEach((dom, i) => dom.onclick = () => console.log(dom.innerText));
})()

/**
 * 专题演讲嘉宾：谭兆歆
bilibili
资深前端工程师
在B站任职五年，现负责Web播放相关工作，即HTML5播放器及播放内核开发、弹幕支持和特效研究、用户体验优化方面。参与的项目有HTML5播放器开发及在B站的全面上线、DASH内核调研开发、蒙板弹幕、播放页改版与秒开等。
 *演讲：B站的视频体验进化之路
近年来互联网的发展越来越快，技术水平、服务质量不断提升，用户体验的要求也越来越高。对于视频观看体验，用户往往会因为数秒的等待时间或频繁的卡顿而放弃观看内容。如何提高用户内容消费的能力和体验成为了我们亟待解决的问题。

B站于2018年进行了一次基于"video first"的年度性优化，针对用户体验的关键指标进行性能优化改造。包括交互设计改版、基于MPEG-DASH协议的视频体验优化、播放页秒开、弹幕体验优化等方面。希望为面对改善用户体验和性能的与会者提供参考。

1. 播放页秒开优化
（1）播放资源前置：抽离核心播放器(无依赖)、非必须模块后置、减少解析时合并逻辑
（2）前端js避让策略：前端js下载、执行避让
（3）Node内网请求playurl：合并playurl到页面内容
（4）预取playurl：结束前预取推荐视频
（5）预取视频：热门视频内容预取，输出到页面
（6）其它渠道预载播放资源：首页、动态、空间、搜索等入口
（7）内核优化：DASH改造、FLV避免预检请求
（8）配置中心：资源长缓存，通过配置中心更改
（9）效果：50分位800ms，80分位1400ms

2.播放体验优化
（1）播放内核尝试DASH：自动切换、无缝切换、卡顿低
（2）自动切换策略: 根据用户网速及当前缓冲区大小自动切换
（3）无缝切换：支持多清晰度及多线路间无缝切换，用户对切换几乎无感
（4）效果：清晰度无缝切换、卡顿率下降60%

3. 弹幕体验优化
（1）弹幕引擎: 为什么使用两套渲染引擎
（2）弹幕优化: 复用弹幕节点，直播模式下丢弃屏幕外弹幕
（3）弹幕蒙板与监测: 不遮挡弹幕，更好的视频观看体验
（4）弹幕内核改造(todo): 使用字体渲染预计算宽高处理，减少重绘

听众收益：

1. 学习性能优化和用户体验结合的经验，特别是播放性能相关
2. 获得弹幕及类似展示效果的处理方面的参考
3. 对性能优化方面的工作提供一定的参考价值*  */