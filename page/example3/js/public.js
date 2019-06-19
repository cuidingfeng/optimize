(() => {
    const $ = (s) => document.querySelectorAll(s);
    const links = $(".link"), pages = $('.page');
    const addClass = (selectIndex) => {
        links.forEach((link, i) => link.className = selectIndex === i ? "link selected" : "link");
    };
    const changeText = (selectIndex) => {
        pages.forEach((page, i) => page.style.display = (selectIndex === i ? "block" : "none"));

        const classlist = pages[selectIndex].classList;
        const hasLoading = classlist.contains("loading");
        if (hasLoading) {
            getText(selectIndex);
        }
    };
    const getText = (selectIndex) => {
        const url = links[selectIndex].href.split("#")[1],
            page = pages[selectIndex];
        fetch(url).then((res) => {
            return res.text()
        }).then((text) => {
            page.innerHTML = text;
            page.classList.remove("loading");
        });
    };
    links.forEach((link, i) => {
        link.onclick = function () {
            addClass(i);
            changeText(i);
        }
    });
    links[0].onclick();

})()