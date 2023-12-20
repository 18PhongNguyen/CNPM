document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the login process
  function login() {
    // Get the email and password input values
    var email = document.getElementById("login_email_291").value;
    var password = document.getElementById("login_password_291").value;

    // You can add your login logic here, for example, make an API call or check credentials

    // Display a message (for demonstration purposes)
    var message = "Login successful for: " + email;
    document.getElementById("thongbao_form_login_291").innerHTML = message;
  }

  // Attach the login function to the login button click event
  document.getElementById("loginButton").addEventListener("click", login);
});
