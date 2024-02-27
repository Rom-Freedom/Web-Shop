import './logo.css'
import logoImg from '/src/assets/img/logo.svg'

//Create a logo
export function getLogo() {
    const logo = document.createElement('img')
    logo.classList.add('logo')
    console.log(logoImg);
    logo.src = logoImg
    return logo
}