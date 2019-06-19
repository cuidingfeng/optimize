(() => {
    const $ = (s) => document.querySelectorAll(s);
    $(".txt4").forEach((dom, i) => dom.onclick = () => console.log(dom.innerText));
})()

/**
 * 专题演讲嘉宾：徐远同（二同）
淘宝
前端渲染技术团队负责人
徐远同，花名二同，淘宝前端渲染技术团队负责人。此前曾任职于华为、百度，参与过百度地图等重量级App的研发。2016年加入淘宝，负责高性能W3C标准化图形渲染引擎以及工具链的研发。主要研究方向为WebGL/WebGPU标准的自有实现，以及跨平台跨终端的UI渲染体系，以拓展前端边界为目标努力。


所属专题：UI与图形渲染
演讲：基于Flutter引擎的TypeScript UI框架在树莓派上的应用
5G时代即将来临，IoT是5G时代一个重要的场景之一。应该以什么姿态和角色去迎接新的技术变革，是每个端开发需要思考的问题。

淘宝技术是新零售的践行者之一。我们曾在线下零售，工厂制造中尝试过包括WebView、Hybrid、纯Native在内的多种技术方案，以求在渲染性能、动态性和开发效率中取得平衡，但效果差强人意。因此，淘宝渲染技术团队在Flutter的Native引擎基础上，建立了一套基于TypeScript的，拥有2D/WebGL/WebGPU能力的可编程自定义的UI渲染管线。

本次分享将会以渲染技术团队在IoT零售中的实践作为起点，详细介绍新的UI渲染管线的原理和实现，包括自定义渲染管线关键实施步骤、引擎中实现的核心技术、跨平台移植的一些细节等内容。希望对关注渲染技术的端侧与会者带来思路上的拓展和帮助。

演讲提纲：

1. IoT时代前端面临的问题

       5G时代概述

       嵌入式设备的开发现状，以及正在发生的变化

       面临的问题

        （1）开发成本和效率问题

        （2）技术引发的动态性问题

        （3）WebView方案因性能带来的成本和体验问题

2. 炙手可热的Flutter

（1）简介

（2）原理简介

（3）生态问题

3. "G"项目介绍

（1）目标定位：使用TypeScript，且拥有Canvas/WebGL/WebGPU能力，可高度定制渲染管线，拥有完整工具链的跨端跨平台高性能渲染解决方案

（2）技术特点：Flutter引擎+TypeScript+GCanvas

（3）框架简介

（4）渲染管线整体流程概述(TypeScript的部分是自定义渲染管线，其余部分归为引擎)

4. 自定义渲染管线详解

（1）树的创建

（2）布局和测量运算

（3）绘制

（4）渲染

（5）视图缓存

（6）输入输出

（7）状态更新

5. 引擎详解

（1）跨平台概述

（2）线程模型

（3）Skia能力概述

6. 工具链简介

（1）如何实现全链路Debugger

7. GCanvas和2D/WebGL/WebGPU能力

8. 展望和总结

（1）TypeScript Runtime

（2）CSS怎么支持



听众收益：

1.可以了解IoT时代端侧开发面临的具体问题

2.可以了解浏览器以及Flutter在内的类W3C渲染体系的完整工作链路和原理

3.为业内提供解决IoT渲染问题的新思路
 */