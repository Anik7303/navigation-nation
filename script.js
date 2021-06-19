const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItems = [nav1, nav2, nav3, nav4, nav5]

function navAnimation(fromDirection, toDirection) {
    navItems.forEach(function (nav, idx) {
        nav.classList.replace(
            `slide-${fromDirection}-${idx + 1}`,
            `slide-${toDirection}-${idx + 1}`
        )
    })
}

function toggleNav() {
    // Toggle: menu bars open / close
    menuBars.classList.toggle('change')
    // Toggle: menu active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate In - Nav Items
        navAnimation('out', 'in')
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate Out - Nav Items
        navAnimation('in', 'out')
    }
}

// event listeners
menuBars.addEventListener('click', toggleNav)
navItems.forEach(function (nav) {
    nav.addEventListener('click', toggleNav)
})
