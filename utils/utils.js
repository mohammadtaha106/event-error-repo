
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  import { getFirestore ,doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  import { getStorage,ref, uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCiBZ3JiW49oYhh_Dha8J9W3lakGSfK3LM",
    authDomain: "event-planner-2f685.firebaseapp.com",
    projectId: "event-planner-2f685",
    storageBucket: "event-planner-2f685.appspot.com",
    messagingSenderId: "1098162251692",
    appId: "1:1098162251692:web:133cd7b85c5bcae43ebc09",
    measurementId: "G-28R1260X83"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {auth,db,storage, onAuthStateChanged,createUserWithEmailAndPassword,doc, setDoc,ref, uploadBytes,getDownloadURL}