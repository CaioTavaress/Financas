// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw1kGKvRAKaYK_boEHo-tdgUs_gwI7RS4",
  authDomain: "financas-eae55.firebaseapp.com",
  projectId: "financas-eae55",
  storageBucket: "financas-eae55.firebasestorage.app",
  appId: "1:389912969995:web:a91140acebaacff42d180e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function adicionarentrada(colecao, dados) {
  try {
    await addDoc(collection(db, colecao), dados)
  } catch (e) {
    alert("Erro ao adicionar " + e )
  }
}


export { db }