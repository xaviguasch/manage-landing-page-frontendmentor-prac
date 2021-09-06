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

// Slider

const selectors = document.querySelectorAll('.circle')
const cards = document.querySelectorAll('.card')

selectors.forEach((sel) => {
  sel.addEventListener('click', function () {
    selectors.forEach((sel) => sel.classList.remove('active'))
    sel.classList.add('active')

    const currentSel = this.id
    const cardSelected = currentSel.replace('sel', 'card')

    cards.forEach((card) => {
      card.classList.remove('visible')
      if (card.id === cardSelected) {
        card.classList.add('visible')
      }
    })
  })
})
