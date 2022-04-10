const signTabs = document.getElementById('signTabs')
const signContent = document.querySelectorAll('.content__item')

const productTabs = document.getElementById('productTabs')
const productContent = document.querySelectorAll('.product__slider')

const changeClass = (el, tabs) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active')
  }
  el.classList.add('active')
}

const listener = (tabs, content) => {
  tabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.btn
    changeClass(e.target, tabs)
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove('active')
      if (content[i].dataset.content === currentTab) {
        content[i].classList.add('active')
      }
    }
  })
}

listener(signTabs, signContent)
listener(productTabs, productContent)

// End of Tabs

const iconMenu = document.querySelector('.header__icon')
const menuBody = document.querySelector('.header__menu')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}
// End of Burger
