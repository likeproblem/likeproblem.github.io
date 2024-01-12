// Check if the cookie has the value "1234"
function checkCookie() {
  // If the cookie value is not "1234", redirect to /login.html
  if (document.cookie !== "1234") {
    window.location.href = "/login.html";
  }
}

// Call the checkCookie function when the script is loaded
checkCookie();
