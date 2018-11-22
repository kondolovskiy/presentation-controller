const host = 'wss://kondolovskiy.herokuapp.com';

class Socket {

	constructor() {
		this._connect();
	}

	_connect() {
		this.socket = new WebSocket(host);

		this._bindEvents();
	}

	_bindEvents() {
		this.socket.onopen = this._onOpen;
		this.socket.onclose = this._onClose.bind(this);
		this.socket.onmessage = this._onMessage.bind(this);
		this.socket.onerror = this._onError;
	}

	_onOpen() {
		console.log("Connected");
	}

	_onClose(event) {
		if (event.wasClean) {
			console.log('Connection are closed');
		} else {
			console.log('Bad connection');
		}
		console.log('Code: ' + event.code + ' reason: ' + event.reason);

		setTimeout(() => {
			this._connect()
		}, 1000); // try to reconnect when connection was closed
	}

	_onMessage(event) {
		console.log("received data " + event.data);
	}

	_onError(error) {
		console.log("Error " + error.message);
	}

	send(message) {
		this.socket.send(message);
	}

}

export default Socket;