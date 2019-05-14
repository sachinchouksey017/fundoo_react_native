import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCBTzR4FBEOtyR02EnEMfL0tLxyEfZIk2Q",
    authDomain: "fundoo-notes-2e7ff.firebaseapp.com",
    databaseURL: "https://fundoo-notes-2e7ff.firebaseio.com",
    projectId: "fundoo-notes-2e7ff",
    storageBucket: "fundoo-notes-2e7ff.appspot.com",
    messagingSenderId: "813034017641",
    appId: "1:813034017641:web:670105515ccbb1de"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  console.log(fire);
  export default fire;
  