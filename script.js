function updateClock() {
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
// Time
document.getElementById("clock").innerHTML =
hours + ":" + minutes + ":" + seconds;
// Date
const options = {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric"
};
document.getElementById("date").innerHTML =
now.toLocaleDateString("en-IN", options);
}
setInterval(updateClock, 1000);
updateClock();
function welcomeMessage() {
   alert("Hii its my web Welcome to krishna website!");



let speech = new
Audio("voice");
    audio.play();
}
    