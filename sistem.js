class Pelanggan{
    constructor(nama,nomorTelepon){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanSewa = null;
        this.databasepelanggan = []
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
  
}
const sistem = new Pelanggan("cobaah", "0000");
const pelanggan1 = new Pelanggan("legis", "083423523562");
const pelanggan2 = new Pelanggan("fatim", "089742812312");
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tampilkanPelanggan();