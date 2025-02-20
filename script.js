function shortenText() {
    const screenWidth = window.innerWidth;
    const textElement = document.querySelector('.penghilangan-teks');
    const originalText = textElement.textContent;

    if (screenWidth <= 515 && originalText.length > 20) {
      textElement.textContent = originalText.substring(0, 400) + '...';
    } else {
      textElement.textContent = originalText;
    }
  }

  // Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
  window.addEventListener('resize', shortenText);
  window.addEventListener('load', shortenText);


  const humberger = document.querySelector(".humburger");
  const menulink = document.querySelector(".menu-link");
  humberger.addEventListener("click", () => {
    menulink.classList.toggle("active");
  });