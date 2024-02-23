import { navigation } from '../main.js'

// Create Header
export function getHeader() {
    //Create Header block
    const header = document.createElement('header')
    header.classList.add('header')
    //Create div container into Header block
    const container = document.createElement('div')
    container.classList.add('container', 'header__container')
    //Create navigation menu
    const nav = document.createElement('nav')
    nav.classList.add('navigation')
    //Create free nav buttons
    let link1 = document.createElement('a')
    link1.href = ''
    link1.classList.add('btn')
    link1.textContent = 'Main page'

    link1.addEventListener('click', function(event) {
        event.preventDefault()
        navigation()
    })

    let link2 = document.createElement('a')
    link2.href = ''
    link2.classList.add('btn')
    link2.textContent = 'Catalogue'

    link2.addEventListener('click', function(event) {
        event.preventDefault()
        navigation('catalog')
    })

    let link3 = document.createElement('a')
    link3.href = ''
    link3.classList.add('btn')
    link3.textContent = 'Bucket'

    link3.addEventListener('click', function(event) {
        event.preventDefault()
        navigation('basket')
    })
    //Add links into nav menu
    nav.append(link1, link2, link3)
    //Add nav to container
    container.append(nav)
    header.append(container)
    return header
}