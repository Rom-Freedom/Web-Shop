import { getMainTitle} from '../components/mainTitle.js'
import { getDesc } from '../components/desc.js'

//Product Page
export function getProductPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')

    const mainTitle = getMainTitle('Product')
    const desc = getDesc('The page is under construction')

    page.append(mainTitle, desc)
    return page
}