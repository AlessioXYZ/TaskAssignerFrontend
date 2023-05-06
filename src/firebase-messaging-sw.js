importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const app = firebase.initializeApp({
  apiKey: "AIzaSyDexasTpvcf1qf-fP9Gwq5GcBrPYT0DDKg",
  authDomain: "taskassigner-c57e3.firebaseapp.com",
  projectId: "taskassigner-c57e3",
  storageBucket: "taskassigner-c57e3.appspot.com",
  messagingSenderId: "962467290975",
  appId: "1:962467290975:web:b36a41e1c5a4a4ff8f60ea",
  measurementId: "G-CPBF55RXG2"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    data: payload.data,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


