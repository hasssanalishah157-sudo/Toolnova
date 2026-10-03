document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.4s ease, transform 0.4s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 70);

    });

});