function sendMail() {
	var link = "mailto:csim@thermonaut.org"
		+ "&subject=" + escape("Add me!")
		+ "&body=" + escape(document.getElementById('myText').value)
		;

	window.location.href = link;
}
