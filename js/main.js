const app = document.getElementById('app')

// Create Header
function getHeader() {
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

    let link2 = document.createElement('a')
    link2.href = ''
    link2.classList.add('btn')
    link2.textContent = 'Catalogue'

    let link3 = document.createElement('a')
    link3.href = ''
    link3.classList.add('btn')
    link3.textContent = 'Bucket'
    //Add links into nav menu
    nav.append(link1, link2, link3)
    //Add nav to container
    container.append(nav)
    header.append(container)
    return header
}

/* Container Page (a block for all pages) */
function getPageContainer() {
    const main = document.createElement('main')
    main.classList.add('page-container')
    return main
}

//Product Cards
function getProductCard(title, price) {
    const item = document.createElement('li')
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-list__title')
    productTitle.textContent = title

    const Productprice = document.createElement('strong')
    Productprice.classList.add('product-list__price')
    Productprice.textContent = `${price} $`

    //Butoon for addition good to a button
    const addBasket = document.createElement('button')
    addBasket.classList.add('btn')
    addBasket.textContent = 'Add to basket'

    item.append(productTitle, Productprice, addBasket)

    return item
}

//Main Title
function getMainTitle(text) {
    const title = document.createElement('h1')
    title.classList.add('main-title')
    title.textContent = text
    return title
}

//Description of a good
function getDesc(text) {
    const desc = document.createElement('p')
    desc.classList.add('desc')
    desc.textContent = text
    return desc
}

//Main Page
function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')
    const mainTitle = getMainTitle('Main Page')
    const list = document.createElement('ul')
    list.classList.add('product-list')

    //Create three cards
    list.append(
        getProductCard('Good 1', 400),
        getProductCard('Good 2', 600),
        getProductCard('Good 3', 750),
    )

    page.append(mainTitle, list)
    return page
}

//Product Page
function getProductPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')

    const mainTitle = getMainTitle('Product')
    const desc = getDesc('The page is under construction')

    page.append(mainTitle, desc)
    return page
}

//Catalog
function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Catalog')
    const desc = getDesc('The page is under construction')

    page.append(mainTitle, desc)
    return page
}

//Basket
function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')

    const mainTitle = getMainTitle('Basket')
    const catalog = getDesc('The page is under construction')

    page.append(mainTitle, catalog)
    return page
}

const header = getHeader()
const pageContainer = getPageContainer()

/* const mainPage = getMainPage()
pageContainer.append(mainPage) */ 

/* const productPage = getProductPage()
pageContainer.append(productPage) */

/* const catalogPage = getCatalogPage()
pageContainer.append(catalogPage) */

const basketPage = getBasketPage()
pageContainer.append(basketPage)

app.append(header, pageContainer)