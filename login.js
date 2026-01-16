const firebaseConfig = {
  apiKey: "AIzaSyC2ZwTQwTP6w-OfyH2U6jYCw_ULrqGsJu4",
  authDomain: "planner-28848511-588c9.firebaseapp.com",
  projectId: "planner-28848511-588c9",
  storageBucket: "planner-28848511-588c9.appspot.com",
  messagingSenderId: "710896904766",
  appId: "1:710896904766:web:64d6cca17eba34c5ad7f6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
    auth.signInWithPopup(provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = result.credential;
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            window.location.href = "planner.html";
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
});