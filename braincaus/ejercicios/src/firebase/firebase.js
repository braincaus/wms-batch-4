import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyBG0juN5YTy_8X11LVnZkvWuEduUSDdY2I",
    authDomain: "curso-wms.firebaseapp.com",
    databaseURL: "https://curso-wms.firebaseio.com",
    projectId: "curso-wms",
    storageBucket: "curso-wms.appspot.com",
    messagingSenderId: "7626122466"
};

const devConfig = {
    apiKey: "AIzaSyBG0juN5YTy_8X11LVnZkvWuEduUSDdY2I",
    authDomain: "curso-wms.firebaseapp.com",
    databaseURL: "https://curso-wms.firebaseio.com",
    projectId: "curso-wms",
    storageBucket: "curso-wms.appspot.com",
    messagingSenderId: "7626122466"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};
