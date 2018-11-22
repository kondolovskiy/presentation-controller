const host = 'wss://kondolovskiy.herokuapp.com';

/**
 * Socket wrapper
 */
class Socket {

	constructor() {
		this._connect();
	}

	/**
	 * Socket connector. Create socket instance and bind events to it
	 * @private
	 */
	_connect() {
		this.socket = new WebSocket(host);

		this._bindEvents();
	}

	/**
	 * Bind socket events to socket instance
	 * @private
	 */
	_bindEvents() {
		this.socket.onopen = this._onOpen;
		this.socket.onclose = this._onClose.bind(this);
		this.socket.onmessage = this._onMessage.bind(this);
		this.socket.onerror = this._onError;
	}

	/**
	 * Socket open handler
	 * @private
	 */
	_onOpen() {
		console.log("Connected");
	}

	/**
	 * Socket close handler
	 * @param event
	 * @private
	 */
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

	/**
	 * Socket message receive handler
	 * @param event
	 * @private
	 */
	_onMessage(event) {
		console.log("received data " + event.data);
	}

	/**
	 * Socket error handler
	 * @param error
	 * @private
	 */
	_onError(error) {
		console.log("Error " + error.message);
	}

	/**
	 * Send socket message
	 * @param message
	 */
	send(message) {
		this.socket.send(message);
	}

}

export default Socket;