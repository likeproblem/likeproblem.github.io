function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

async function lame() {
  var value = await hash(document.cookie);
  if (value != "adf6824e82a89af6667815e1653b74553e3a25884b6fc81bd0ae4cec76deed9c") {
   	window.location.replace("../");
  }
}
