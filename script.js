(function () {
  emailjs.init("3mvmwHEOXuqaEk3Hd");
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm("service_4xrremr", "template_rqftu36", this).then(
      function () {
        console.log("Email sent successfully");
        alert("Message Sent Successfully!");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
