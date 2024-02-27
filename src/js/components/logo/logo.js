import './logo.css'

//Create a logo
export function getLogo() {
    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = ''
    return logo
}