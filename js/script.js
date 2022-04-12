$('ul.price__tabs').on('click', 'li:not(.price__tab_active)', function () {
  $(this)
    .addClass('price__tab_active').siblings().removeClass('price__tab_active')
    .closest('div.container').find('div.price__content').removeClass('price__content_active').eq($(this).index()).addClass('price__content_active');
});

const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close')
closeOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  document.body.style.overflowY = "hidden";
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.style.overflowY = "visible";
});

closeOverlay.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.style.overflowY = "visible";
});

$('.menu__link').on('click', function () {
  menu.classList.remove('active');
  document.body.style.overflowY = "visible";
})
// Modal
$('[data-modal=consultation]').on('click', function () {
  $('.overlay, #consultation').fadeIn('slow');
  menu.classList.remove('active');
  document.body.style.overflowY = "visible";
});

$('.modal__close').on('click', function () {
  $('.overlay, #consultation, #success').fadeOut();
  $('form').trigger('reset');
})

$('form').submit(function (e) {
  e.preventDefault();
  $('#consultation').fadeOut();
  $('.overlay, #success').fadeIn('slow');
})

function show(anything) {
  document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.price__dropdown');
dropdown.onclick = function () {
  dropdown.classList.toggle('active');
}

$('.price__dropdown').on('click', 'li:not(.option__item_active)', function () {
  $(this)
    .addClass('option__item_active').siblings().removeClass('option__item_active')
    .closest('div.container').find('div.price__content').removeClass('price__content_active').eq($(this).index()).addClass('price__content_active');
});

const sections = document.querySelectorAll(".section");
console.log(sections)
const links = document.querySelectorAll(".aside_menu__item");
console.log(links)

const cb = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      links.forEach((link) => link.classList.remove("aside_menu__item_active"));
      console.log
      const activeId = entry.target.id;
      console.log(activeId)
      const activeLink = document.querySelector(
        `.aside_menu__item[href="#${activeId}"]`
      )
      console.log(activeLink)
      if (activeLink) {
        activeLink.classList.add("aside_menu__item_active");
      }
    }
  })
};

const sectionObserver = new IntersectionObserver(cb, {
  threshold: [0.2, 0.5, 0.8],
});

sections.forEach((s) => sectionObserver.observe(s));