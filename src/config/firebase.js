import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyByGAGVVoLDetDIyjhZQBiaYZiuE6ErvYE",
  authDomain: "gdg-settat-10ddf.firebaseapp.com",
  databaseURL: "https://gdg-settat-10ddf.firebaseio.com",
  projectId: "gdg-settat-10ddf",
  storageBucket: "gdg-settat-10ddf.appspot.com",
  messagingSenderId: "912752693926",
  appId: "1:912752693926:web:2e2f08876b817e44cfda67",
  measurementId: "G-55HMBBYQDF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  authw:firebase.auth,
  storage:firebase.storage(),
  functions: firebase.functions()
};