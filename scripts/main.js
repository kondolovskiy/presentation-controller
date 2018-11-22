const socket = new WebSocket('wss://kondolovskiy.herokuapp.com');

socket.onopen = function() {
	console.log("Connected");
};

socket.onclose = function(event) {
	if (event.wasClean) {
		console.log('Connection are closed');
	} else {
		console.log('Bad connection'); // например, "убит" процесс сервера
	}
	console.log('Code: ' + event.code + ' reason: ' + event.reason);
};

socket.onmessage = function(event) {
	console.log("received data " + event.data);
};

socket.onerror = function(error) {
	console.log("Ошибка " + error.message);
};

document.addEventListener('DOMContentLoaded', () => {
	const next = document.querySelector('.next');
	const prev = document.querySelector('.prev');

	prev.addEventListener('click', e => {
		socket.send('prev');
	});

	next.addEventListener('click', e => {
		socket.send('next');
	});

	const noSleepBtn = document.getElementById('noSleep');
	const noSleep = new NoSleep();

	function enableNoSleep() {
		noSleep.enable();
		noSleepBtn.removeEventListener('click', enableNoSleep, false);
	}

	noSleepBtn.addEventListener('click', enableNoSleep, false);

	noSleep.disable();
});