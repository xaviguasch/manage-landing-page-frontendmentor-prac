const openBtn = document.querySelector('.open-nav-btn')
const closeBtn = document.querySelector('.close-nav-btn')

const nav = document.querySelector('.nav')

const openNavModal = () => {
  nav.classList.add('navigation-open')
  openBtn.classList.add('open-nav-btn--hidden')

  document.body.style.overflow = 'hidden'
}

const closeNavModal = () => {
  nav.classList.remove('navigation-open')

  openBtn.classList.remove('open-nav-btn--hidden')

  document.body.style.overflow = 'unset'
}

openBtn.addEventListener('click', openNavModal)
closeBtn.addEventListener('click', closeNavModal)
