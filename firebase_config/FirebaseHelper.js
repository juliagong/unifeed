import React from 'react';
import * as firebase from 'firebase';

const firebaseConfiguration = {
  apiKey: "AIzaSyBDdsKKM_1udiu3ukyj41KkXagjSw2SxjM",
  authDomain: "unifeed-44183.firebaseapp.com",
  databaseURL: "https://unifeed-44183.firebaseio.com",
  projectId: "unifeed-44183",
  storageBucket: "unifeed-44183.appspot.com",
  messagingSenderId: "32605102054"
};

export default class FirebaseHelper {

  static firebaseInit() {
    try {
      firebase.initializeApp(firebaseConfiguration);
      console.log("We've initialized the firebase! (All your firebase belong to us)");
    } catch (e) {
      console.log('App reloaded, so firebase did not re-initialize');
    }
  }

  static writeData(event_title) {
    firebase.database().ref('events').set({
      title: event_title,
    });
    console.log(event_title + " is in the base");
  }

  static readData = async () => {
    const snapshot = await firebase.database().ref('events').once('value');
      let evtitle = snapshot.val().title;
      console.warn("Title is: ", evtitle);
    // console.warn("We found " + title + "!");
    return evtitle;
  }
}
