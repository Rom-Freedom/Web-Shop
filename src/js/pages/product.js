import { getMainTitle} from '/src/js/components/mainTitle/mainTitle.js'
import { getDesc } from '/src/js/components/desc/desc.js'

//Product Page
export function getProductPage(title) {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')

    const mainTitle = getMainTitle(title)
    const desc = getDesc('The page is under construction')

    page.append(mainTitle, desc)
    return page
}