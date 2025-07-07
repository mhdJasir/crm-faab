importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDm64msDLJkVertRhXInUpHKXwykYRsyhA",
  authDomain: "faab-invest-web-crm.firebaseapp.com",
  projectId: "faab-invest-web-crm",
  storageBucket: "faab-invest-web-crm.appspot.com",
  messagingSenderId: "1026327703118",
  appId: "1:1026327703118:web:11a4c6912a6e97d3e05d1f"
});

const messaging = firebase.messaging();
