//navbar fixed
window.onscroll= function () {
    const header = document.querySelector('header')
    const btt = document.querySelector('#btt')
    const fixedNav = header.offsetTop
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        btt.classList.remove('hidden')
        btt.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        btt.classList.remove('flex')
        btt.classList.add('hidden')
    }
}

// burger
const burger = document.querySelector('#burger')
const navMenu = document.querySelector("#nav-menu")
burger.addEventListener('click', function() {
    burger.classList.toggle('burger-active')
    navMenu.classList.toggle('hidden')
})

//hidden nav toggle

window.addEventListener('click', function(e) {
    if (e.target != burger && e.target != navMenu) {
        burger.classList.remove('burger-active')
        navMenu.classList.add('hidden')
    }
})

const darkToggle = document.querySelector("#dark-toggle")
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(e) {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
}