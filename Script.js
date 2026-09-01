// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "! Your message has been submitted successfully."
        );

        contactForm.reset();

    });

}
