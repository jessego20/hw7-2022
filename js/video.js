var video = document.querySelector("#player1");

// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	console.log("Auto play is set to", video.autoplay) 
	video.loop = false
	console.log("Loop is set to", video.autoplay)
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
	video.playbackRate *= 0.9;
	console.log("Video playback speed lowered to", video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Video playback speed increased to", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}

	console.log("Video current time is", video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute")
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute")
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log(document.querySelector("#volume"))
	console.log("The current volume is", video.volume)
});

// Old School
document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").className = "video oldSchool"
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").className = "video"
});