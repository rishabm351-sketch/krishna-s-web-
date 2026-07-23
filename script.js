function updateClock() {
const now = new Date();
let hours = String(now.getHours()).padStart(2,"0");
let minutes = String(now.getMinutes()).padStart(2,"0");
let seconds = String(now.getSeconds()).padStart(2,"0");
document.getElementById("clock").innerHTML =
hours + ":" + minutes + ":" + seconds;
const options={
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
};
document.getElementById("date").innerHTML =
now.toLocaleDateString("en-IN",options);
}
setInterval(updateClock,1000);
updateClock();
function welcomeMessage(){
alert("Hii! Welcome to Krishna Website ??");
}
function appendValue(value){
document.getElementById("display").value+=value;
}
function clearDisplay(){
document.getElementById("display").value="";
}
function calculate(){
try{
document.getElementById("display").value=
eval(document.getElementById("display").value);
}catch{
document.getElementById("display").value="Error";
}
}