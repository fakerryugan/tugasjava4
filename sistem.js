class Pelanggan{
    constructor(nama,nomorTelepon){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }
    pilihKendaraan(namaKendaraan) {
        this.kendaraanDisewa = namaKendaraan;
        console.log(`${this.nama} telah memilih untuk menyewa: ${namaKendaraan}`);
    }
}
class Tranpotasi{
    constructor(){
        this.databasepelanggan = [];
    }
  tambahPelanggan(Pelanggan){
    this.databasepelanggan.push(Pelanggan);
    console.log(`Berhasil menambahkan : ${Pelanggan.nama}`);
  }
  tampilkanPelanggan(){
    console.log("\=== Daftar Pelanggan ===");
    for (let i= 0; i < this.databasepelanggan.length; i++){
        let p = this.databasepelanggan[i];
        console.log(`${i+1}.nama:${p.nama} telp: ${p.nomorTelepon}`);
    }
  }
  tampilkanYangSudahSewa() {
        console.log("\n=== Daftar Pelanggan yang sudah sewa ===");
        let penyewa = this.databasepelanggan.filter(p => p.kendaraanDisewa !== null);
        if (penyewa.length === 0) {
            console.log("Belum ada pelanggan yang menyewa kendaraan.");
        } else {
            penyewa.forEach((p, i) => {
                console.log(`${i + 1}. Nama: ${p.nama} | Kendaraan: ${p.kendaraanDisewa}`);
            });
        }}
}
const sistem = new Tranpotasi();
const pelanggan1 = new Pelanggan("legis", "083423523562");
const pelanggan2 = new Pelanggan("fatim", "089742812312");
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tampilkanPelanggan();
pelanggan2.pilihKendaraan("Mobil Avanza");
sistem.tampilkanYangSudahSewa();