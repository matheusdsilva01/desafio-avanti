const departments = document.querySelectorAll('.department__item[data-department]');
departments.forEach(department => {
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
            } else {
                category.classList.remove('dropdown__categories-list--active');
            }
        })
    })
})

const carousel = document.querySelectorAll('.carousel__items');
const carouselNextBtn = document.querySelectorAll('.carousel__arrow--right');


const carouselIndex = window.innerWidth < 1024 ? 6 : 3;

var currentIndex = 0;

const carouselDots = document.querySelectorAll('.carousel__indicator');

function carouselScroll() {
    carouselDots.forEach(dot => {
        const index = dot.dataset.index;
        if (index != currentIndex) {
            dot.classList.remove('carousel__indicator--active');
        } else {
            dot.classList.add('carousel__indicator--active');
        }
    })
    carousel.forEach(item => {
        const itemScrollPosition = item.scrollWidth * currentIndex / carouselIndex;

        item.scrollTo({
            left: itemScrollPosition,
            behavior: 'smooth'
        });
    });
}

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

carouselDots.forEach(dot => {
    const index = dot.dataset.index;
    dot.addEventListener('click', () => {
        currentIndex = Number(index)
        carouselScroll();
    })
})