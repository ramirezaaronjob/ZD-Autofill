document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			subject: document.getElementById('subject').value,
			email: document.getElementById('email').value,
			assignment: document.getElementById('Assignment').value,
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('subject').value = '';
	document.getElementById('email').value = '';
	document.getElementById('Assignment').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		subject: document.getElementById('subject').value,
		email: document.getElementById('email').value,
		assignment: document.getElementById('').value,

	}, function() {
		console.log("Saved!");
	});
});
		