import { getHeader } from './components/header.js'
import { getPageContainer } from './components/pageContainer.js'
import { getProductCard } from './components/productCard.js'
import { getMainTitle} from './components/mainTitle.js'
import { getDesc } from './components/desc.js'

const app = document.getElementById('app')

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

//Navigation
export function navigation(page) {
    pageContainer.innerHTML = ''
    switch (page) {
      case 'catalog':
        const catalogPage = getCatalogPage() 
        pageContainer.append(catalogPage)
        break
      case 'basket':
        const BasketPage = getBasketPage() 
        pageContainer.append(BasketPage)
        break
      default:
        const mainPage = getMainPage()
        pageContainer.append(mainPage)
        break
    }
}

navigation()

app.append(header, pageContainer)