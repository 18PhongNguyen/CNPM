document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the registration process
  function submitRegistrationForm() {
    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordRetype = document.getElementById("password_retype").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("dienthoai").value;
    var contactInfo = document.getElementById("lienhe").value;

    // You can add your registration logic here, for example, make an API call or validate the inputs

    // Display a message (for demonstration purposes)
    var message =
      "Registration successful for: " + name + "\nEmail: " + email;
    document.getElementById("thongbao").innerHTML = message;
  }

  // Attach the registration function to the submit button click event
  document.getElementById("button").addEventListener("click", function () {
    submitRegistrationForm();
  });
});
