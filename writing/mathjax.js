window.MathJax = {
    tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
        processEscapes: true,
        tags: 'ams',
        macros: {
            RR: "\\mathbb{R}",
            ZZ: "\\mathbb{Z}",
            CC: "\\mathbb{C}",
            half: "\\tfrac{1}{2}",
            Hk: "H_k",
            sgn: "\\operatorname{sgn}",
            der: ["\\frac{d#1}{d#2}", 2],
            dder: ["\\frac{d^{2}#1}{d#2^{2}}", 2],
            ip: ["\\langle #1, #2 \\rangle", 2]
        }
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    },
    chtml: {
        scale: 1.0
    }
};
