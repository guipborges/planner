
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyC2ZwTQwTP6w-OfyH2U6jYCw_ULrqGsJu4",
    authDomain: "planner-28848511-588c9.firebaseapp.com",
    projectId: "planner-28848511-588c9",
    storageBucket: "planner-28848511-588c9.firebasestorage.app",
    messagingSenderId: "710896904766",
    appId: "1:710896904766:web:64d6cca17eba34c5ad7f6f"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "planner.html";
    }
});

document.getElementById('login-button').addEventListener('click', () => {
    signInWithPopup(auth, provider).catch(error => console.error('Error during login:', error));
});