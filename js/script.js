/* ==========================================================================
   LOGIKA PENCEGAHAN NAVIGASI BACK BROWSER
   ========================================================================== */
function lockBrowserHistory() {
  window.history.pushState({ page: 'app' }, "", window.location.href);
}

lockBrowserHistory();

window.addEventListener('touchstart', function() {
  lockBrowserHistory();
}, { once: true });

window.addEventListener('popstate', function (event) {
  lockBrowserHistory();
  const modalWarning = document.getElementById('modalBackWarning');
  if (modalWarning) {
    modalWarning.classList.add('active');
  }
});

function closeBackWarning() {
  const modalWarning = document.getElementById('modalBackWarning');
  if (modalWarning) {
    modalWarning.classList.remove('active');
  }
}

/* ==========================================================================
   LOGIKA TOMBOL KELUAR / LOGOUT (MENUTUP TAB / KELUAR APLIKASI)
   ========================================================================== */
function konfirmasiKeluar() {
  if (confirm("Apakah Anda yakin ingin keluar dari aplikasi?")) {
    // 1. Lepas proteksi back history
    window.onpopstate = null;

    // 2. Coba tutup tab/window
    window.close();

    // 3. Fallback: Jika diblokir browser, alihkan ke layar netral (layar putih kosong)
    setTimeout(function () {
      window.location.href = "about:blank";
    }, 100);
  }
}
