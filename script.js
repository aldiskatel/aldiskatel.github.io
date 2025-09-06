// small interactions: scroll to form and fake submit
document.addEventListener('DOMContentLoaded', function () {
  const reportBtn = document.getElementById('reportBtn');
  const reportBox = document.getElementById('reportBox');
  const form = document.getElementById('reportForm');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  reportBtn && reportBtn.addEventListener('click', function () {
    reportBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // highlight briefly
    reportBox.style.transition = 'box-shadow 0.25s';
    reportBox.style.boxShadow = '0 10px 40px rgba(50,120,170,0.12)';
    setTimeout(()=> reportBox.style.boxShadow = '', 1200);
  });

  form && form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      desc: form.desc.value.trim(),
      time: new Date().toISOString()
    };
    // In real deployment you'd send to your backend or GitHub issues/API.
    console.log('Laporan terkirim:', data);
    alert('Terima kasih — laporan Anda telah dikirim (demo).');
    form.reset();
  });
});
