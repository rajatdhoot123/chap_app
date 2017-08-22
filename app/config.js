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
export const refQue = firebase.database().ref("questions");
export const refMsg = firebase.database().ref("messages");
export const refUsers = firebase.database().ref("users");
export const firebaseAuth = firebase.auth;


var connectedRef = firebase.database().ref(".info/connected");
var presenceRef = firebase.database().ref("/ama/ama1/activeuser/");
var delRef = ref.child("/ama/ama1/activeuser/");
connectedRef.on("value", function(snap) {
    if (snap.val()) {
    delRef.onDisconnect().update({user3 : null});
    presenceRef.update({user3 : true});
  }
});

/*
 if (snapshot.val()) {
    presenceRef.onDisconnect().remove();
    presenceRef.set(true);
  }*/
