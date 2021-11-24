/*========== MENU SHOW Y HIDDEN ==========*/
const navigationMenu = document.getElementById('nav-menu'),
    navigationToggle = document.getElementById('nav-toggle'),
    navigationClose = document.getElementById('nav-close')


/*========== MENU SHOW ==========*/
/*Validate if constant exists */
if (navigationToggle) {
    navigationToggle.addEventListener('click', () => {
        navigationMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ==========*/
/*Validate if constant exists */
if (navigationClose) {
    navigationClose.addEventListener('click', () => {
        navigationMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navigationLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navigationMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navigationMenu.classList.remove('show-menu')
}
navigationLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents => {
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*==================== contributes MODAL ====================*/
const modalViews = document.querySelectorAll('.contributes__modal'),
    modalButtons = document.querySelectorAll('.contributes__button'),
    modalCloses = document.querySelectorAll('.contributes__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


/*==================== SCROLL SECTION ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
        //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
        //when the scroll is greater than 560 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previousl selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously choose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activate of deactivate the theme manually with the button
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Active / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // we save teh theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.getItem('selected-icon', getCurrentIcon())
})