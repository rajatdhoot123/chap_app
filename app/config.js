import firebase from "firebase";

var config = {
  apiKey: "AIzaSyC5q3xRlB7JPHfVueIUaEDtBz61OSOoFG8",
  authDomain: "lv-ama.firebaseapp.com",
  databaseURL: "https://lv-ama.firebaseio.com",
  projectId: "lv-ama",
  storageBucket: "lv-ama.appspot.com",
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
