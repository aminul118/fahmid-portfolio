document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      emailjs.sendForm("service_", "template_", this).then(
        function (response) {
          console.log("res", response);
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("statusSuccess").innerText =
            "Thank you for contacting with us";
        },
        function (error) {
          console.log("FAILED...", error);
          document.getElementById("statusFail").innerText =
            "Failed to send email.";
        }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      document.getElementById("statusFail").innerText = "An error occurred.";
    }
  });
