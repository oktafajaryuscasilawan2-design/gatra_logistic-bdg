function lacakResi() {
    const resi = document.getElementById('resiInput').value;
    const hasil = document.getElementById('hasilLacak');

    if(resi === "2695") {
        hasil.innerHTML = "<strong>Status:</strong> Terkirim<br><strong>Penerima:</strong> Karya Sukses Permata<br><strong>Lokasi:</strong> Bandung";
    } else {
        hasil.innerHTML = "Resi tidak ditemukan.";
    }
}