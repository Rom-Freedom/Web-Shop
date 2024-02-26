import { getMainTitle} from '/src/js/components/mainTitle.js'
import { getProductCard } from '/src/js/components/productCard.js'

//Main Page
export function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')
    const mainTitle = getMainTitle('Main Page')
    const list = document.createElement('ul')
    list.classList.add('product-list')

//Create three cards
list.append(
    getProductCard('Good_1', 400),
    getProductCard('Good_2', 600),
    getProductCard('Good_3', 750),
)

page.append(mainTitle, list)
return page
}
