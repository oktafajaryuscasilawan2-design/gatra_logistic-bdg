const URL_GOOGLE_SHEET = "https://script.google.com/macros/s/AKfycbxyRbkVygoE1HszmxclGvvSCxmuvzhUn-yiMCS5ScMYsS9F6HXEWxq-yA1ecKRE5Jxh/exec"; // Tempel URL dari langkah 1 di sini

async function lacakResi() {
    const resi = document.getElementById('resiInput').value;
    const hasil = document.getElementById('hasilLacak');
    hasil.innerHTML = "Mencari...";

    try {
        const response = await fetch(URL_GOOGLE_SHEET);
        const data = await response.json();
        
        // Asumsi kolom A (index 0) adalah No. Resi
        const found = data.find(row => row[0].toString() === resi);

        if (found) {
            // Sesuaikan indeks dengan kolom di spreadsheet Anda (0=Asal, 1=Tujuan, dst)
            hasil.innerHTML = `<strong>Status:</strong> ${found[4]}<br>
                              <strong>Penerima:</strong> ${found[2]}`;
        } else {
            hasil.innerHTML = "Nomor resi tidak ditemukan.";
        }
    } catch (error) {
        hasil.innerHTML = "Gagal mengambil data. Periksa koneksi atau konfigurasi API.";
    }
}
