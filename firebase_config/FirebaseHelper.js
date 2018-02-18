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

  static writeData(newEvent) {
    let newEventKey = firebase.database().ref().child('events').push().key;

    let updates = {};
    updates['/events/' + newEventKey] = newEvent;

    console.log(newEvent.title, " is in the base");

    return firebase.database().ref().update(updates);

    // firebase.database().ref('events').set({
    //   title: event_title,
    // });
  }

  static readData = async () => {
    const snapshot = await firebase.database().ref().once('value');
      let events = snapshot.val();
      // console.warn("Title is: ", evtitle);
    // console.warn("We found " + title + "!");
    return events;
  }
}
