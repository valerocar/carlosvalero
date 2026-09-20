fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    let path = location.pathname;
    if (path.endsWith("/")) path += "index.html";
    newelem.querySelectorAll('.nav-link').forEach(link => {
        let matches = (link.dataset.match || link.getAttribute("href")).split(" ");
        let hit = matches.some(m => m.endsWith("/") ? path.startsWith(m) : path === m);
        if (hit) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
})
