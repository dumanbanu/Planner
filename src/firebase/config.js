import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
 /*   apiKey: "AIzaSyAluQdAMT--lGmZPixU5JQrGvzlOGoJ9RA",
    authDomain: "friendsplanner.firebaseapp.com",
    databaseURL: "https://friendsplanner.firebaseio.com",
    projectId: "friendsplanner",
    storageBucket: "friendsplanner.appspot.com",
    messagingSenderId: "541886107298",
    appId: "1:541886107298:web:18834108e203dc28ebabeb" */

    apiKey: "AIzaSyAluQdAMT--lGmZPixU5JQrGvzlOGoJ9RA",
    authDomain: "friendsplanner.firebaseapp.com",
    databaseURL: "https://friendsplanner-default-rtdb.firebaseio.com",
    projectId: "friendsplanner",
    storageBucket: "friendsplanner.appspot.com",
    messagingSenderId: "541886107298",
    appId: "1:541886107298:web:37266b1d46e706fb3bd1fb"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp({});
  }else {
    firebase.app(); // if already initialized, use that one
  }

  export { firebase };