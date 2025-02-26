const header = document.querySelector('header')
const scrollTopBtn = document.querySelector('.scroll')
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTopBtn.classList.add('show')
	} else {
		scrollTopBtn.classList.remove('show')
	}
})

window.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

window.addEventListener('scroll', function () {
	header.classList.toggle('sticky', window.scrollY > 80)
})

menu.onclick = () => {
	menu.classList.toggle('bx-x')
	navlist.classList.toggle('open')
}

window.onscroll = () => {
	menu.classList.remove('bx-x')
	navlist.classList.remove('open')
}

const sr = ScrollReveal({
	duration: 1000,
	reset: true,
	easing: 'ease-out',
	viewFactor: 0.4,
})

sr.reveal('.home-text', { delay: 100, origin: 'left', distance: '30px' })
sr.reveal('.home-img', { delay: 150, origin: 'right', distance: '30px' })

sr.reveal('.container-box, .box', {
	delay: 50,
	scale: 0.7,
	opacity: 0,
	viewFactor: 0.4,
})

sr.reveal('.about-img', {
	delay: 200,
	origin: 'left',
	distance: '30px',
	duration: 2000,
	viewFactor: 0.4,
})

sr.reveal('.about-text', {
	delay: 250,
	origin: 'right',
	distance: '30px',
	viewFactor: 0.4,
})

sr.reveal('.row', {
	delay: 100,
	origin: 'bottom',
	distance: '30px',
	rotate: { x: 0, y: 180, z: 0 },
	opacity: 0,
	viewFactor: 0.5,
})

sr.reveal('.review-content, .contact', {
	delay: 100,
	origin: 'bottom',
	distance: '30px',
	opacity: 0,
	viewFactor: 0.5,
})

sr.reveal('.c-one', {
	delay: 200,
	rotate: { x: 0, y: 180, z: 0 },
	duration: 1000,
	viewFactor: 0.9,
})
