import { getMainTitle} from '../components/mainTitle.js'
import { getProductCard } from '../components/productCard.js'

//Main Page
export function getMainPage() {
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
