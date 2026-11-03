(() => {
    const languageNav = document.querySelector('.family-language');
    if (!languageNav) return;

    const sections = Array.from(document.querySelectorAll('.family-history > section, #indice'));

    // Ordinary links work without JavaScript. When available, keep the current chapter.
    languageNav.querySelectorAll('[data-language-switch]').forEach(link => {
        link.addEventListener('click', () => {
            const readingLine = languageNav.getBoundingClientRect().bottom + Math.min(160, window.innerHeight / 4);
            const currentSection = sections.filter(section =>
                section.getBoundingClientRect().top <= readingLine
            ).pop();
            const destination = new URL(link.href);
            destination.hash = currentSection ? currentSection.id : '';
            link.href = destination.href;
        });
    });
})();
