import { router } from '/src/js/main'

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
    link1.href = '/'
    link1.classList.add('btn')
    link1.textContent = 'Main page'
    /* link1.setAttribute('data-navigo', true) */

    link1.addEventListener('click', function(event) {
        event.preventDefault()
        router.navigate('/');
    })

    let link2 = document.createElement('a')
    link2.href = '/catalog'
    link2.classList.add('btn')
    link2.textContent = 'Catalogue'
    /* link2.setAttribute('data-navigo', true) */

    link2.addEventListener('click', function(event) {
        event.preventDefault()
        router.navigate('/catalog');
    })

    let link3 = document.createElement('a')
    link3.href = '/basket'
    link3.classList.add('btn')
    link3.textContent = 'Bucket'
    /* link3.setAttribute('data-navigo', true) */

    link3.addEventListener('click', function(event) {
        event.preventDefault()
        router.navigate('/basket');
    })
    //Add links into nav menu
    nav.append(link1, link2, link3)
    //Add nav to container
    container.append(nav)
    header.append(container)
    return header
}