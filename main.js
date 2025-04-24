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