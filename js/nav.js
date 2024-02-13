   // Ambil elemen label dan navbar links
   const navbarLabel = document.getElementById('nav_bar_icon');
   const navbarLinks = document.getElementById('navbar-links');

   // Tambahkan event listener untuk mendeteksi klik pada label
   navbarLabel.addEventListener('click', function () {
       // Periksa apakah checkbox tercentang atau tidak
       if (navbarLabel.checked) {
           // Tampilkan navbar links jika checkbox tercentang
           navbarLinks.classList.remove('hidden');
       } else {
           // Sembunyikan navbar links jika checkbox tidak tercentang
           navbarLinks.classList.add('hidden');
       }
   });