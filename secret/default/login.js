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
  if (value !== "f9e5490830b172f4eb960c5dabbfe2b2825a28633a4256380d1219cdffdfc375") {
   	window.location.replace("../");
  }
}

lame();
