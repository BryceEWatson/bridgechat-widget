// BridgeChat-Widget
// Data Models for widget service level

// Client
var client = {
	id : "129DKSN39D", //Hashed UID
	name : "Bob",
	status : "connected", // disconnected / connecting / connected / disconnecting
	room : new room(), // The joined chat room (Only 1 room per client, per webpage)
	peerStreams : Array[](peerStream), // All connected audio/video streams
};
	
var room = {
	name : "Bill\'s blog chat", // Name given by server operator
	peers : Array[](peer), // All connected peers
	textHistory : Array[](String), // Chat history if one exists
};

var peer = {
	id : "32dD9dkSF",
	name : "Bill",
};

var peerStream = {
	id : "3949dDK94",
	peerId : "32dD9dkSF",
	status : "offer-created", // offer-sent / awaiting-offer / answer-sent / established
	localStream : MediaStream, // WebRTC objected created by getUserMedia call
	questionSPD : new SDP(), // SDP connection object from WebRTC API
	remoteStream : MediaStream,
	answerSPD : new SDP(), // Created from a remote peer's question SPD
};