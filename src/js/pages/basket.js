import { getMainTitle} from '/src/js/components/mainTitle.js'
import { getDesc } from '/src/js/components/desc.js'

//Basket
export function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')

    const mainTitle = getMainTitle('Basket')
    const catalog = getDesc('The page is under construction')

    page.append(mainTitle, catalog)
    return page
}