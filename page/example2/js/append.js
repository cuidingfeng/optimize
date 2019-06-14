define(function () {
    let index = 0;
    return text => {
        index = index % 7;
        index++;
        const div = document.createElement("div");
        div.className = "box box" + index;
        div.innerHTML = text;
        document.body.appendChild(div);
    }
})