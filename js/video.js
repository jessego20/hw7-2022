var video = document.querySelector("#player1");

// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play();
	console.log("Play Video");
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log("Video playback lowered to", video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("Video playback increased to", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}

	console.log("Video skipped to", video.currentTime, "seconds");
});
