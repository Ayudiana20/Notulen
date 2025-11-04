// Tambahkan efek navbar berubah saat di-scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Aktifkan ikon Lucide
lucide.createIcons();
