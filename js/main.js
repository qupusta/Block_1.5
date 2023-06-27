const slider = document.querySelector('.swiper');
const brandsExpander = document.querySelector('.brands-expander');
const brandsWrapper = document.querySelector('.navigation-container__brands-list');
const expanderIcon = document.querySelector('.brands-expander__icon')

function expandBrands() {
        if (brandsExpander.classList.contains('brands-expander--unactive')) {
            brandsWrapper.style.overflow = 'visible'
            brandsWrapper.style.height = 'auto'
            brandsExpander.textContent = 'Скрыть'
            brandsExpander.classList.remove('brands-expander--unactive')
            brandsExpander.classList.add('brands-expander--active')
            expanderIcon.classList.remove('brands-expander__icon--unactive');
            expanderIcon.classList.add('brands-expander__icon--active');
        } else if (brandsExpander.classList.contains('brands-expander--active')) {
            brandsWrapper.style.overflow = 'hidden'
            brandsWrapper.style.height = '174px'
            brandsExpander.textContent = 'Показать всё'
            brandsExpander.classList.remove('brands-expander--active')
            brandsExpander.classList.add('brands-expander--unactive')
            expanderIcon.classList.remove('brands-expander__icon--active');
            expanderIcon.classList.add('brands-expander__icon--unactive');
        }
}
brandsExpander.addEventListener('click', function () {
    expandBrands();
});


const swiper = new Swiper(slider, {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination'
    },
});