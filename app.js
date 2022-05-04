import { initializeApp } from "https://wwww.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getDatabase, ref, child, get } from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
} from "https://wwww.gstatic.com/firebasejs/9.0.0/firebase-authserve.js";
// import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCqv4hOl5nCZlZJ483DYbVdqT9AUwsIQN8",
  authDomain: "msp-firebase-2ec13.firebaseapp.com",
  databaseURL: "https://msp-firebase-2ec13-default-rtdb.firebaseio.com",
  projectId: "msp-firebase-2ec13",
  storageBucket: "msp-firebase-2ec13.appspot.com",
  messagingSenderId: "785216846570",
  appId: "1:785216846570:web:d31aff8380ac4abe163593",
  measurementId: "G-VWKDT32C1D",
});

const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const todosCol = collection(db, "todos");
// const snapshot = await getDocs(todosCol);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in");
  } else {
    console.log("No user");
  }
});

// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// var firebaseRef = firebase.database().ref("db");
// firebaseRef.on("value", function (snapshot) {
//   //snapshot.forEach(function (ChildSnapshot) {
//   //let humi = ChildSnapshot.val().Humi;
//   //let light = ChildSnapshot.val().Light;
//   //let temp = ChildSnapshot.val().Temp;
//   //let mois = ChildSnapshot.val().mois;
//   //addItemsToList(humi, light, temp, mois);
//   var data = snapshot.val();
//   for (let i in data) {
//     console.log(data[i]);
//   }
// });
