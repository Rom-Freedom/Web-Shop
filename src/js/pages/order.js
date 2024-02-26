import { getMainTitle} from '/src/js/components/mainTitle.js'
import { getDesc } from '/src/js/components/desc.js'

//Catalog
export function getOrderPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Order')
    const desc = getDesc('Order registration')

    page.append(mainTitle, desc)
    return page
}