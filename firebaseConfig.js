// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCagRwodyAusCgiknjtYo_w1SlBIWfBnw4",
    authDomain: "hackathon-57987.firebaseapp.com",
    projectId: "hackathon-57987",
    storageBucket: "hackathon-57987.appspot.com",
    messagingSenderId: "449787068173",
    appId: "1:449787068173:web:8ae301e8e028c9a772ba44",
    measurementId: "G-M56M3E6L5T"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const storage = getStorage(app)




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'


// const firebaseConfig = {
//     apiKey: "AIzaSyD2fFro448NgCMuR8ZrQBP2iT5l3qoSdmg",
//     authDomain: "learn-189ba.firebaseapp.com",
//     projectId: "learn-189ba",
//     storageBucket: "learn-189ba.appspot.com",
//     messagingSenderId: "9257843948",
//     appId: "1:9257843948:web:dfa51db592a39a0d5379c9",
//     measurementId: "G-TQWCCB47FP"
// }

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const database = getFirestore(app);
// export const storage = getStorage(app)