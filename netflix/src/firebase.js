import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6RVKNpatFY0GQM94iNKHchcmaVIymSds",
    authDomain: "netflix-build-6b988.firebaseapp.com",
    projectId: "netflix-build-6b988",
    storageBucket: "netflix-build-6b988.appspot.com",
    messagingSenderId: "230306111365",
    appId: "1:230306111365:web:1957deeb3b485dc3392eec"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;