function sha256(str) {
  const hash = CryptoJS.SHA256(str);
  return hash.toString(CryptoJS.enc.Hex);
}

if (sha256(document.cookie) !== sha256(sha256("test"))) {
 	window.location.href = "/index.html";
}
