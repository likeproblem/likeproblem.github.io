function sha256(str) {
	const crypto = require('crypto'),hash = crypto.getHashes();
	hashPwd = crypto.createHash('sha256').update(str).digest('hex');
	return hashPwd;
}

if (sha256(document.cookie) !== sha256(sha256("test"))) {
 	window.location.href = "/index.html";
}
