document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			subject: document.getElementById('subject').value,
			email: document.getElementById('email').value,
			assignment: document.getElementById('assignment').value,
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('subject').value = '';
	document.getElementById('email').value = '';
	document.getElementById('assignment').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		subject: document.getElementById('subject').value,
		email: document.getElementById('email').value,
		assignment: document.getElementById('assignment').value,
	}, function() {
		console.log("Saved!");
	});
});
document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'subject',
		'email',
		'assignment'
	], function(result) {
		document.getElementById('subject').value = result.subject;
		document.getElementById('email').value = result.email;
		document.getElementById('assignment').value = result.assignment;
	});
});
		