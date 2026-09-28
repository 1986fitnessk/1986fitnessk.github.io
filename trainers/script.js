// Center booking page, without the old date selection parameter.
const bookingUrl = 'https://m.booking.naver.com/booking/12/bizes/603554/items/4925065';
const gallery = document.querySelector('.qualification-gallery');
if (gallery) {
  document.querySelector('#credentials').after(gallery);
  document.querySelector('#approach').after(document.querySelector('#movement-case'));
  document.querySelector('#movement-case').after(document.querySelector('#training-scenes'));
}
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.coach-card').forEach(card => {
      card.hidden = selected !== 'all' && !(card.dataset.specialties || '').split(' ').includes(selected);
    });
    document.querySelector('.directory-status').textContent = selected === 'all'
      ? '강한새 · 한슬기 · 김재현 · 채지훈 트레이너 소개를 확인하실 수 있습니다. 다른 선생님들의 소개도 순차적으로 추가됩니다.'
      : button.textContent + ' 분야 · 트레이너 ' + document.querySelectorAll('.coach-card[data-specialties]:not([hidden])').length + '명';
  });
});
document.querySelectorAll('[data-booking]').forEach(link => {
  link.href = bookingUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
