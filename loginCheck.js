function checkCookie() {
  if (document.cookie !== "GoodPassword123") {
    window.location.href = "/login.html";
  }
}

checkCookie();
