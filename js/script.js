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
