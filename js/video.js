let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is " + video.autoplay)
	console.log("Loop is " + video.loop)
	console.log()
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
 });

 document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down video")
	video.playbackRate *= .90
	console.log("Speed is ", video.playbackRate)
 });

 document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video")
	video.playbackRate *= 1.10
	console.log("Speed is ", video.playbackRate)
 });

 document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip 10 seconds of video")
	video.currentTime += 10
	console.log("Current Time is ", video.currentTime)
 });

 document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute video")
	if (video.muted){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Video is ", video.muted)
	}
	else{
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Video is ", video.muted)
	}
 });

 document.querySelector("#slider").addEventListener("click", function() {
	console.log("adjust volume of video")
	document.querySelector("#volume").innerHTML = (document.querySelector("#slider").value + "%")
	video.volume = document.querySelector("#slider").value / 100
	console.log("Volume is ", document.querySelector("#slider").value)
 });

 document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
	console.log("vintage video")
 });

 document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
	console.log("original video")
 });


