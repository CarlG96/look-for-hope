function sendMail(contactForm) {
    emailjs.send('default_service', 'template_z92ulcc', {
        "from_name": contactForm.from_name.value,
        "from_email": contactForm.from_email.value,
        "message": contactForm.message.value
    }).then(
        function(response) {
            console.log("SUCCESS", response);
            const form = document.getElementById("contact-form");
            form.remove();
            const responseMessage = document.createElement(`p`);
            responseMessage.classList.add('white-text', 'text-center', 'reveal-text', 'mt-3');
            responseMessage.textContent = "Thank you for contacting us!";
            document.getElementById("form-div").appendChild(responseMessage);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )

    return false;
}