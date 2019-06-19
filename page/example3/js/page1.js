(() => {
    const $ = (s) => document.querySelectorAll(s);
    $(".txt1").forEach((dom, i) => dom.onclick = () => console.log(dom.innerText));
})()
/**
 *演讲：Using webpack to make Apps fast at Microsoft
Did you know that the average website takes over 16 seconds to load on a mobile device? Did you know that on average the amount JavaScript and CSS that goes wasted is over 60%! If JavaScript and CSS are our most expensive resources to load, why are we hurting our load times by shipping stuff we don't ever use? How do we get rid of this unused code? How can we profile our web applications load times?

Join me as I teach you about the performance constrains of the modern Web, and how to write rich applications within these boundaries using household tools like webpack.

 We’ll learn about how webpack solves these performance problems through a concept called code-splitting. We will walk through examples of code-splitting together, the many ways you can leverage it in your web application, and how webpack  enhances this feature using magic comments, service workers, and prefetch and preload!

By the end of this talk you know:

Where the most costly resources in your we application
How to profile and analyze a web application load-times
Understand what is "unused code" and how to get rid of it with code-splitting and webpack
Learn the many types of code splitting in webpack, and other performance related features like service worker and how to integrate them with webpack
Learn how frameworks adopt code-splitting and the route, component, and library level
How to implement this in your own codebase*  */