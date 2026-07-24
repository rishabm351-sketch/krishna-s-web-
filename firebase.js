// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
// Firebase Config
const firebaseConfig = {
apiKey: "AIzaSyAbRzqJmE6hGSvwlpXL_y4BcmsC53e8IWU",
authDomain: "krishnawebsite-d4eb1.firebaseapp.com",
projectId: "krishnawebsite-d4eb1",
storageBucket: "krishnawebsite-d4eb1.firebasestorage.app",
messagingSenderId: "873215482732",
appId: "1:873215482732:web:c2a30d80dcd480f3f3f149"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Signup
window.signup = function () {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
createUserWithEmailAndPassword(auth, email, password)
.then(() => {
alert("Account Created Successfully!");
window.location.href = "login.html";
})
.catch((error) => {
alert(error.message);
});
};
// Login
window.login = function () {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
.then(() => {
alert("Login Successful!");
window.location.href = "index.html";
})
.catch((error) => {
alert(error.message);
});
};
// Logout
window.logout = function () {
signOut(auth).then(() => {
alert("Logged Out!");
window.location.href = "login.html";
});
};

onAuthStateChanged(auth, (user) =>
{
  if
(window.location.pathname.endsWith
("index.html") ||

window.location.pathname.endsWith(
"/")) {
    if (!user) {
        window.location.href =
"login.html";
     }
  }
});