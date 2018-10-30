import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDxjM8VYKfFrqtO6FB-VrgVrV9SLZxuIY",
    authDomain: "autentication-71da5.firebaseapp.com",
    databaseURL: "https://autentication-71da5.firebaseio.com",
    projectId: "autentication-71da5",
    storageBucket: "autentication-71da5.appspot.com",
    messagingSenderId: "12791314183"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
      auth
  }
