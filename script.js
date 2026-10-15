document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio de Olivia Guzmán inicializado correctamente.");
    const revealElements = document.querySelectorAll(".project-card, .about-container, .section-header");

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    }

    revealElements.forEach(el => {
        el.classList.add("reveal");
    });

    window.addEventListener("scroll", checkReveal);
    checkReveal();

    // Interactivo en Flotantes
    const floatingCards = document.querySelectorAll(".floating-card");
    
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        floatingCards.forEach((card, index) => {
            const factor = (index + 1) * 0.5;
            card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });
});