/* script.js upgrade */
async function lacakResi() {
    const resi = document.getElementById('resiInput').value;
    const hasil = document.getElementById('hasilLacak');
    const URL = "https://script.google.com/macros/s/AKfycbxyRbkVygoE1HszmxclGvvSCxmuvzhUn-yiMCS5ScMYsS9F6HXEWxq-yA1ecKRE5Jxh/exec";

    hasil.innerHTML = "Mencari data...";

    try {
        const response = await fetch(URL);
        const data = await response.json();
        
        // Asumsi kolom A=Resi, B=Pengirim, C=Penerima, D=Layanan, E=Status
        const found = data.find(row => row[0].toString() === resi);

        if (found) {
            hasil.innerHTML = `
                <div style="margin-top:20px; padding:15px; border-left: 5px solid #d32f2f; background: #f9f9f9;">
                    <p><strong>Status:</strong> ${found[4]}</p>
                    <p><strong>Pengirim:</strong> ${found[1]}</p>
                    <p><strong>Penerima:</strong> ${found[2]}</p>
                </div>`;
        } else {
            hasil.innerHTML = "<p style='color:red;'>Resi tidak ditemukan. Mohon cek kembali.</p>";
        }
    } catch (e) {
        hasil.innerHTML = "Terjadi kesalahan saat memuat data.";
    }
}
