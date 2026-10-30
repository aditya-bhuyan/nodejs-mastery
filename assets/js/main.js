/* ===== Quiz engine ===== */
function checkQuiz(btn) {
  const block = btn.closest('.quiz-block');
  const chosen = block.querySelector('input[type=radio]:checked');
  const fb = block.querySelector('.quiz-feedback');
  if (!chosen) { fb.textContent = 'Please select an answer.'; fb.className = 'quiz-feedback'; return; }
  if (chosen.dataset.correct === 'true') {
    fb.textContent = '✓ Correct!';
    fb.className = 'quiz-feedback correct';
  } else {
    fb.textContent = '✗ Incorrect — try again.';
    fb.className = 'quiz-feedback wrong';
  }
}

/* ===== OS tab switcher ===== */
function switchOs(evt, panelId, group) {
  document.querySelectorAll('[data-group="' + group + '"].os-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('[data-group="' + group + '"].os-panel').forEach(p => p.classList.remove('active'));
  evt.currentTarget.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

/* ===== Sidebar nav-group toggle ===== */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sidebar .nav-group-label').forEach(function (label) {
    label.addEventListener('click', function (e) {
      // Don't toggle when the inner link itself is clicked
      if (e.target.tagName === 'A') return;
      var group = label.closest('.nav-group');
      group.classList.toggle('open');
    });
  });
});

/* ===== Active nav highlight ===== */
(function () {
  const path = location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('nav a, .sidebar ul li a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.endsWith(href.replace(/^\.\//, ''))) a.classList.add('active');
  });
})();
