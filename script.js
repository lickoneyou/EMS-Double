const open = document.querySelector('.openBtn')
const close = document.querySelector('.closeBtn')
const modal = document.querySelector('.modal')

const toggleModal = () => {
  modal.classList.toggle('active')
}

open.addEventListener('click', () => {
  toggleModal()
})

close.addEventListener('click', () => {
  toggleModal()
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    toggleModal()
  }
})
