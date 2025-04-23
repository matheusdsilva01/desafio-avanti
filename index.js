function showSnackbar() {
    var snackbar = document.getElementById("snackbar")
    snackbar.classList.add("show")
    setTimeout(() => {
        snackbar.classList.remove("show") 
    }, 3000)
}

/**
 * @param {SubmitEvent} event 
 */
function submitForm(event) {
    event.preventDefault()
    const snackbar = document.querySelector('#snackbar')
    const form = event.target
    const inputValue = form.search.value

    if (!inputValue) {
        snackbar.textContent = 'Preencha o campo de busca'
    } else {
        snackbar.textContent = `Você buscou por: '${inputValue}'`
    }
    showSnackbar()
}

const departments = document.querySelectorAll('.department__item[data-department]')
var dropdownOpen = false
const dropdownCloseBtnImg = document.querySelector('.dropdown__close--button--img')

// Adiciona listeners para os botões de departamento no dropdown
departments.forEach((department, index) => {
    // Coloca o primeiro departamento como ativo no desktop
    if (index === 0 && window.innerWidth >= 1279) {
        const departmentId = department.dataset.department
        const category = document.querySelector(`.dropdown__categories-list[data-department="${departmentId}"]`)
        category.classList.toggle('dropdown__categories-list--active')
    }
    // Listener de clique no botão de departamento para visualização das suas respectivas categorias através do data-attribute 
    department.addEventListener('click', event => {
        const departmentId = event.currentTarget.dataset.department
 
        const categories = document.querySelectorAll('.dropdown__categories-list[data-department]')
        categories.forEach(category => {
            const otherDepartmentsBtn = document.querySelectorAll('.department__item[data-department]')
            // Remove a classe de ativo dos outros departamentos
            otherDepartmentsBtn.forEach(otherDepartment => {
                if (otherDepartment.dataset.department !== departmentId) {
                    otherDepartment.classList.remove('department__item--active')
                }
            })

            const departmentBtn = document.querySelector(`.department__item[data-department="${departmentId}"]`)

            if (departmentBtn) {
                departmentBtn.classList.toggle('department__item--active')
            }
            // Adiciona a classe de ativo na categoria correspondente
            if (category.dataset.department === departmentId) {
                category.classList.toggle('dropdown__categories-list--active')
                dropdownCloseBtnImg.setAttribute('src', 'assets/move-left.svg')
                dropdownOpen = true
            } else {
                category.classList.remove('dropdown__categories-list--active')
            }
        })
    })
})

// Função que gerencia o estado das tags 'summary' do footer, para se adequar ao design proposto 
function updateFooterColumnState() {
    const columnsFooter = document.querySelectorAll('.footer__column')
    if (window.innerWidth <= 640) {
        columnsFooter.forEach(column => {
            column.open = false
        })
    } else {
        columnsFooter.forEach(column => {
            column.open = true
        })
    }
}

const carousel = document.querySelectorAll('.carousel__items')

var totalPagesCarousel = Math.ceil(carousel[0].scrollWidth / carousel[0].clientWidth)
var currentPage = 0

// Função para rolar o carrossel de acordo com o índice atual selecionado
function carouselScroll() {
    carousel.forEach(item => {
        const itemScrollPosition = item.scrollWidth * currentPage / totalPagesCarousel
        item.scrollTo({
            left: itemScrollPosition,
            behavior: 'smooth'
        })
        
    })
}

updateFooterColumnState()
window.addEventListener('resize', () => {
    updateFooterColumnState()
    const carouselWrapper = document.querySelectorAll('.carousel__items')
    // Recalcula o número total de 'páginas' do carrossel e a página atual
    currentPage = 0
    totalPagesCarousel = Math.ceil(carouselWrapper[0].scrollWidth / carouselWrapper[0].clientWidth)
    renderCarouselDots()
})

// Função para criar os indicadores do carrossel
function createCarouselDot(index, dotsContainer) {
    const dot = document.createElement('span')
    dot.classList.add('carousel__indicator')
    dotsContainer.appendChild(dot)
    if (index === currentPage) {
        dot.classList.add('carousel__indicator--active')
    }
    dot.dataset.index = index
}

// Função para renderizar os indicadores do carrossel
function renderCarouselDots() {
    const dotsContainer = document.querySelectorAll('.carousel__indicators')
    dotsContainer.forEach(dot => {
        dot.innerHTML = ''
    })
    for (let i = 0; i < totalPagesCarousel; i++) {
        createCarouselDot(i, dotsContainer[0])
        createCarouselDot(i, dotsContainer[1])
    }
}
renderCarouselDots()

carousel.forEach(item => {
    item.addEventListener('scroll', (event) => {
    const carouselDots = document.querySelectorAll('.carousel__indicator')
    const item = event.currentTarget
    const currentIndexScrollPosition = Math.ceil(item.scrollLeft / item.clientWidth)

        carouselDots.forEach(dot => {
            const index = dot.dataset.index
            if (index == currentIndexScrollPosition) {
                dot.classList.add('carousel__indicator--active')
            } else {
                dot.classList.remove('carousel__indicator--active')
            }
        })
    })
})

// listeners para os botões de navegação do carrossel
const carouselNextBtn = document.querySelectorAll('.carousel__arrow--right')
const carouselPrevBtn = document.querySelectorAll('.carousel__arrow--left')

carouselNextBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        currentPage++
        if (currentPage >= totalPagesCarousel) {
            currentPage = 0
        }
        carouselScroll()
    })
})

carouselPrevBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentPage === 0) {
            currentPage = totalPagesCarousel - 1
        } else {
            currentPage--
        }
        carouselScroll()
    })
})


// Listeners para os indicadores do carrossel, utilizando uma técnica chamada 'event delegation'
const indicatorsWrapper = document.querySelectorAll('.carousel__indicators')
indicatorsWrapper.forEach(dot => {
    dot.addEventListener('click', (event) => {
        if (event.target.classList.contains('carousel__indicator')) {
            const index = event.target.dataset.index
            currentPage = Number(index)
            carouselScroll()
        }
    })
})


// Função para abrir e fechar o sidebar do mobile
function openSidebar() {
    const categories = document.querySelector('.dropdown__content')
    categories.classList.toggle('dropdown__content--active')
}

function closeSidebar() {
    if (dropdownOpen) {
        const categoryOpen = document.querySelector('.dropdown__categories-list--active')
        categoryOpen.classList.remove('dropdown__categories-list--active')
        dropdownCloseBtnImg.setAttribute('src', 'assets/close.svg')
        dropdownOpen = false
        return
    }
    const categories = document.querySelector('.dropdown__content')
    categories.classList.remove('dropdown__content--active')
}