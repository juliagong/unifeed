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

class FirebaseHelper {

  static firebaseInit() {
    try {
      firebase.initializeApp(firebaseConfiguration);
    } catch (e) {
      console.log('App reloaded, so firebase did not re-initialize');
    }
  }
}
