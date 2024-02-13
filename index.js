import './exported.css'
import './styles.css'

const $composition = document.querySelector(".composition")
const $trg = document.querySelector(".header__trg-menu")

$trg.addEventListener("click", () => {
  $composition.classList.toggle("is-menufs")
})
