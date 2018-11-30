import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyBcKc_Wu16zABK8UssJ_rwsi4CF3HVkvNA",
  authDomain: "tracer-app-213111.firebaseapp.com",
  databaseURL: "https://tracer-app-213111.firebaseio.com",
  projectId: "tracer-app-213111",
  storageBucket: "tracer-app-213111.appspot.com",
  messagingSenderId: "725001674967"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;