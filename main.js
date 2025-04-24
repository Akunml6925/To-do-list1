 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-wvBGzlYI9NHjVZBq7wbUHtEWrN3AFI8",
  authDomain: "pasarbarokah-56d6c.firebaseapp.com",
  projectId: "pasarbarokah-56d6c",
  storageBucket: "pasarbarokah-56d6c.appspot.com",
  messagingSenderId: "316348641371",
  appId: "1:316348641371:web:5ad38a561e7d73744acf7e",
  measurementId: "G-NKKFY4X1ZC"
};
// Inisialisasi Firebase
let dataTugas = [];
let nomor = 1;

document.getElementById("form-tugas").addEventListener("submit", function(e) {
  e.preventDefault();
  let tugas = {
    id: nomor++,
    nama: document.getElementById("nama").value,
    prioritas: document.getElementById("prioritas").value,
    tanggal: document.getElementById("tanggal").value,
    selesai: false
  };
  dataTugas.push(tugas);
  tampilkanTugas();
  this.reset();
});

function tampilkanTugas() {
  const tbody = document.getElementById("tabel-tugas");
  tbody.innerHTML = "";
  dataTugas.forEach((tugas, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td class="${tugas.selesai ? 'text-decoration-line-through text-muted' : ''}">${tugas.nama}</td>
      <td>${tugas.prioritas}</td>
      <td>${tugas.tanggal}</td>
      <td>${tugas.selesai ? 'Selesai' : 'Belum'}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="tandaiSelesai(${tugas.id})">Tandai Selesai</button>
      <a href="ubah-todoolist.html?id=${tugas.id}" class="text-info me+2">edit</a>
      <a href="#" class="text-danger"onclick="hapusTugas(${tugas.id})">hapus</a>
      </td>
    `;
    tbody.appendChild(row);
  });
}

window.tandaiSelesai = function(id) {
  const tugas = dataTugas.find(t => t.id === id);
  if (tugas) {
    tugas.selesai = true;
    tampilkanTugas();
  }
};