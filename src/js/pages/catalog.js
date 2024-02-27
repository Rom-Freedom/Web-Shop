import { getMainTitle} from '/src/js/components/mainTitle/mainTitle.js'
import { getDesc } from '/src/js/components/desc/desc.js'

//Catalog
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Catalog')
    const desc = getDesc('The page is under construction')

    page.append(mainTitle, desc)
    return page
}