import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDcIgBjVMmCEy03-C2_m4ardMYvzQgBDE",
  authDomain: "instagram-clone-f132a.firebaseapp.com",
  projectId: "instagram-clone-f132a",
  storageBucket: "instagram-clone-f132a.appspot.com",
  messagingSenderId: "1063333750785",
  appId: "1:1063333750785:web:d2fff875691098765df800",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
