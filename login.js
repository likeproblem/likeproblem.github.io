function sha256(str) {
	hashPwd = crypto.createHash('sha256').update(str).digest('hex');
	return hashPwd;
}

if (sha256(document.cookie) !== sha256(sha256("test"))) {
 	window.location.href = "/index.html";
}
