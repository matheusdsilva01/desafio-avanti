function showSnackbar() {
    var snackbar = document.getElementById("snackbar");
    snackbar.classList.add("show");
    setTimeout(() => {
        snackbar.classList.remove("show"); 
    }, 3000);
}

/**
 * @param {SubmitEvent} event 
 */
function submitForm(event) {
    event.preventDefault();
    const snackbar = document.querySelector('#snackbar')
    const form = event.target
    const inputValue = form.search.value;

    if (!inputValue) {
        snackbar.textContent = 'Preencha o campo de busca';
    } else {
        snackbar.textContent = `Você buscou por: '${inputValue}'`;
    }
    showSnackbar()
}

const departments = document.querySelectorAll('.department__item[data-department]');
var dropdownOpen = false
const dropdownCloseBtnImg = document.querySelector('.dropdown__close--button--img');

departments.forEach((department, index) => {
    if (index === 0 && window.innerWidth >= 1279) {
        const departmentId = department.dataset.department;
        const category = document.querySelector(`.dropdown__categories-list[data-department="${departmentId}"]`);
        category.classList.toggle('dropdown__categories-list--active');
    }

    department.addEventListener('click', event => {
        const departmentId = event.currentTarget.dataset.department;
 
        const categories = document.querySelectorAll('.dropdown__categories-list[data-department]');
        categories.forEach(category => {
            const otherDepartmentsBtn = document.querySelectorAll('.department__item[data-department]');
            otherDepartmentsBtn.forEach(otherDepartment => {
                if (otherDepartment.dataset.department !== departmentId) {
                    otherDepartment.classList.remove('department__item--active');
                }
            })

            const departmentBtn = document.querySelector(`.department__item[data-department="${departmentId}"]`);
            if (departmentBtn) {
                departmentBtn.classList.toggle('department__item--active');
            }
            if (category.dataset.department === departmentId) {
                category.classList.toggle('dropdown__categories-list--active');
                dropdownCloseBtnImg.setAttribute('src', 'assets/move-left.svg');
                dropdownOpen = true;
            } else {
                category.classList.remove('dropdown__categories-list--active');
            }
        })
    })
})

function updateFooterColumnState() {
    const columnsFooter = document.querySelectorAll('.footer__column');
    if (window.innerWidth <= 640) {
        columnsFooter.forEach(column => {
            column.open = false;
        })
    } else {
        columnsFooter.forEach(column => {
            column.open = true;
        })
    }
}

const carousel = document.querySelectorAll('.carousel__items');
const carouselNextBtn = document.querySelectorAll('.carousel__arrow--right');


var carouselIndex = Math.ceil(carousel[0].scrollWidth / carousel[0].clientWidth)
var currentIndex = 0;

function carouselScroll() {
    carousel.forEach(item => {
        const itemScrollPosition = item.scrollWidth * currentIndex / carouselIndex;
        item.scrollTo({
            left: itemScrollPosition,
            behavior: 'smooth'
        });
        
    });
}

updateFooterColumnState()
window.addEventListener('resize', () => {
    updateFooterColumnState()
    const carouselWrapper = document.querySelectorAll('.carousel__items');
    currentIndex = 0;
    carouselIndex = Math.ceil(carouselWrapper[0].scrollWidth / carouselWrapper[0].clientWidth);
    const dotsWrapper = document.querySelectorAll('.carousel__indicators');
    dotsWrapper.forEach(dot => {
        dot.innerHTML = '';
    })
    setCarouselDots();
})

function createCarouselDot(index, dotsContainer) {
    const dot = document.createElement('span');
    dot.classList.add('carousel__indicator');
    dotsContainer.appendChild(dot);
    if (index === currentIndex) {
        dot.classList.add('carousel__indicator--active');
    }
    dot.dataset.index = index;
}

function setCarouselDots() {
    const dotsContainer = document.querySelectorAll('.carousel__indicators');
    dotsContainer.forEach(dot => {
        dot.innerHTML = '';
    })
    for (let i = 0; i < carouselIndex; i++) {
        createCarouselDot(i, dotsContainer[0]);
        createCarouselDot(i, dotsContainer[1]);
    }
}
setCarouselDots();

carousel.forEach(item => {
    item.addEventListener('scroll', (event) => {
    const carouselDots = document.querySelectorAll('.carousel__indicator');
    const item = event.currentTarget
    const currentIndexScrollPosition = Math.ceil(item.scrollLeft / item.clientWidth);

        carouselDots.forEach(dot => {
            const index = dot.dataset.index;
            if (index == currentIndexScrollPosition) {
                dot.classList.add('carousel__indicator--active');
            } else {
                dot.classList.remove('carousel__indicator--active');
            }
        })
    })
});


carouselNextBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        currentIndex++
        if (currentIndex >= carouselIndex) {
            currentIndex = 0;
        }
        carouselScroll()
    });
});

const carouselPrevBtn = document.querySelectorAll('.carousel__arrow--left');
carouselPrevBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = carouselIndex - 1;
        } else {
            currentIndex--
        }
        carouselScroll()
    });
});

const indicatorsWrapper = document.querySelectorAll('.carousel__indicators');

indicatorsWrapper.forEach(dot => {
    dot.addEventListener('click', (event) => {
        if (event.target.classList.contains('carousel__indicator')) {
            const index = event.target.dataset.index;
            currentIndex = Number(index)
            carouselScroll();
        }
    })
})

function openSidebar() {
    const categories = document.querySelector('.dropdown__content');
    categories.classList.toggle('dropdown__content--active');
}

function closeSidebar() {
    if (dropdownOpen) {
        const categoryOpen = document.querySelector('.dropdown__categories-list--active');
        categoryOpen.classList.remove('dropdown__categories-list--active')
        dropdownCloseBtnImg.setAttribute('src', 'assets/close.svg');
        dropdownOpen = false;
        return
    }
    const categories = document.querySelector('.dropdown__content');
    categories.classList.remove('dropdown__content--active');
}