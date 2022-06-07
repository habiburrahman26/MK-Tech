const tabContainers = document.querySelector('.tab-containers');
const tabsContent = document.querySelectorAll('.tab-content');
const tabs = document.querySelectorAll('.versatile-tab');

tabContainers.addEventListener('click', function (e) {
  const clicked = e.target.closest('.versatile-tab');

  if (!clicked) return;

  //remove classes
  tabs.forEach((t) => t.classList.remove('bg-orange', 'text-light'));
  tabsContent.forEach((c) => c.classList.add('hidden'));

  // Activate content area
  clicked.classList.add('bg-orange', 'text-light');
  document
    .querySelector(`.tab-content--${clicked.dataset.tab}`)
    .classList.remove('hidden');
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
