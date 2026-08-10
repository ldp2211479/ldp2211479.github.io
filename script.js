const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    if (!value || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(value);
      button.classList.add('copied');
      setTimeout(() => button.classList.remove('copied'), 900);
    } catch {
      // ignore
    }
  });
});
