fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    let page = location.pathname.split("/").pop() || "index.html";
    let current = newelem.querySelector('.nav-link[href="' + page + '"]');
    if (current) {
        current.classList.add("active");
        current.setAttribute("aria-current", "page");
    }
})