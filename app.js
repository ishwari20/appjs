import { initializeApp } from "https://wwww.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getDatabase, ref, child, get } from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
} from "https://wwww.gstatic.com/firebasejs/9.0.0/firebase-authserve.js";
// import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC9D8BJXZnauALhmz7dlIwesMF3BMCo_g0",
  authDomain: "trial-fc9c2.firebaseapp.com",
  databaseURL: "https://trial-fc9c2-default-rtdb.firebaseio.com",
  projectId: "trial-fc9c2",
  storageBucket: "trial-fc9c2.appspot.com",
  messagingSenderId: "274661535098",
  appId: "1:274661535098:web:18d0140399c4abf0af7ac3",
  measurementId: "G-CZ4RRBC3W8",
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
