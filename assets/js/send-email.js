// Tangkap elemen form
var contactForm = document.getElementById("contact-form");

// Tangkap event submit form
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman form default

    // Ambil nilai input dari pengguna
    var name = document.getElementById("cname").value;
    var email = document.getElementById("cemail").value;
    var subject = "New Message from " + name;
    var message = document.getElementById("cmessage").value;

    // Kirim pesan menggunakan EmailJS
    emailjs
        .send("service_z8myl51", "template_po56u34", {
            name: name,
            reply_to: email,
            subject: subject,
            message: message,
        })
        .then(
            function (response) {
                console.log("Email sent!", response.status, response.text);
                alert("Message sent successfully!");
                contactForm.reset();
            },
            function (error) {
                console.error("Error sending email", error);
                alert("Error sending message. Please try again later.");
            }
        );
});
