import { getMainTitle} from '/src/js/components/mainTitle/mainTitle.js'
import { getProductCard } from '/src/js/components/productCard/productCard.js'

//Main Page
export function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')

    const mainTitle = getMainTitle('Main Page')
    

page.append(mainTitle)
return page
}
