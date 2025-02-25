const header = document.querySelector('header')

window.addEventListener('scroll', function () {
	header.classList.toggle('sticky', window.scrollY > 80)
})

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
	menu.classList.toggle('bx-x')
	navlist.classList.toggle('open')
}

window.onscroll = () => {
	menu.classList.remove('bx-x')
	navlist.classList.remove('open')
}

const sr = ScrollReveal({
	origin: 'top',
	distance: '85px',
	duration: 2000,
	reset: true,
})

sr.reveal('.home-text', { delay: 300 })
sr.reveal('.home-img', { delay: 400 })
sr.reveal('.container', { delay: 300 })

sr.reveal('.about-img', { delay: 300 })
sr.reveal('.about-text', { delay: 300 })

sr.reveal('.middle', {})
sr.reveal('.row-btn,.shop-content', { delay: 300 })

sr.reveal('.review-content,.contact', { delay: 300 })

sr.reveal('.row', {
	delay: 300, // Задержка перед анимацией
	duration: 1500, // Длительность анимации 1 секунда
	origin: 'top', // Элементы появляются сверху вниз
	distance: '50px', // Смещение на 50px (можно убрать)
	rotate: { x: 0, y: 180, z: 0 }, // Вращение на 180 градусов по оси Y
	easing: 'ease-in-out', // Плавная анимация
	reset: true, // Повтор анимации при прокрутке вверх
})

sr.reveal('.c-one', {
	delay: 300, // Задержка перед анимацией
	duration: 1500, // Длительность анимации 1 секунда
	origin: 'top', // Элементы появляются сверху вниз
	distance: '50px', // Смещение на 50px (можно убрать)
	rotate: { x: 0, y: 180, z: 0 }, // Вращение на 180 градусов по оси Y
	easing: 'ease-in-out', // Плавная анимация
	reset: true, // Повтор анимации при прокрутке вверх
})

sr.reveal('.container-box', {
	delay: 100, // Задержка перед анимацией
	duration: 1000, // Длительность анимации 1 секунда
	scale: 0.5, // Начальный размер (50% от нормального)
	easing: 'ease-in-out', // Плавное появление
	reset: true, // Анимация повторяется при скролле вверх
})

sr.reveal('.box', {
	delay: 100, // Задержка перед анимацией
	duration: 1000, // Длительность анимации 1 секунда
	scale: 0.5, // Начальный размер (50% от нормального)
	easing: 'ease-in-out', // Плавное появление
	reset: true, // Анимация повторяется при скролле вверх
})
