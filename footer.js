fetch('/footer.html')
    .then(res => {
        if (!res.ok) throw new Error("footer.html: " + res.status);
        return res.text();
    })
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_footer");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem,oldelem);
    })
    .catch(err => console.error("footer not loaded:", err))
