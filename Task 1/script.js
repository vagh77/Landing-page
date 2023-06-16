function validateForm(event) {
  event.preventDefault();

  // Retrieve form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var city = document.getElementById("city").value;
  var phone = document.getElementById("phone").value;

  // Validate form fields
  if (!name || !email || !password || !city || !phone) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  // Validate email format
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  // Validate phone number format
  var phoneRegex = /^\d{10}$/;
  if (!phone.match(phoneRegex)) {
    showMessage("Please enter a 10-digit phone number.", "error");
    return;
  }

  // If all validations pass, show success message
  showMessage("Registration successful!", "success");
}

function showMessage(message, type) {
  var messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.className = type;
}
