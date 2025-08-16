document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("kirim");
  button.addEventListener("click", function() {
      var nama = document.getElementById("input-nama")
      var tanggalLahir = document.getElementById("input-tanggal-lahir")
      var jenisKelamin = document.querySelector('input[name="jk"]:checked')
      var pesan = document.getElementById("input-pesan")
      var message = "Nama: " + nama + "\nTanggal Lahir: " + tanggalLahir + "\nJenis Kelamin: " + jenisKelamin + "\nPesan: " + pesan;
      console.log(message);
  });
});
