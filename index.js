  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      });

      if (!isActive) {
        item.classList.add('active');
        item.querySelector('.icon').textContent = '−';
      }
    });
  });
