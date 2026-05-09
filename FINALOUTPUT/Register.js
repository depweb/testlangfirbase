// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-4ol_qRxRfPdN1ePkIWdbTL7Mn2hIT1s",
    authDomain: "testingdepweb.firebaseapp.com",
    projectId: "testingdepweb",
    storageBucket: "testingdepweb.firebasestorage.app",
    messagingSenderId: "596952236257",
    appId: "1:596952236257:web:6ffe57fa3b65989c38f7a0",
    measurementId: "G-KNLNCPHLFC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  //submit button

  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event) {
    event.preventDefault();

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href = "Home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  loginForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  const passwordInput = document.getElementById('password').value;
  const correctPassword = "yourSecurePassword"; // Replace with your actual password

  if (passwordInput === correctPassword) {
    alert("Login successful!");
    // Redirect or perform next action here
  } else {
    // Deny login and show error message
    errorMessage.style.display = 'block';
    console.log("Access Denied: Wrong Password");
  }
});
  })

  function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleBtn = document.getElementById("toggleBtn");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleBtn.textContent = "Show";
  }
}
   