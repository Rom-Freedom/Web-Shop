import { getMainTitle} from '../components/mainTitle.js'
import { getDesc } from '../components/desc.js'

//Catalog
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Catalog')
    const desc = getDesc('The page is under construction')

    page.append(mainTitle, desc)
    return page
}