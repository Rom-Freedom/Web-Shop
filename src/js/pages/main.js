import { getMainTitle} from '/src/js/components/mainTitle/mainTitle.js'
import { getProductList } from '/src/js/components/productsList/productsList.js'
import { URL } from '/src/js/config.js'

//Main Page
export function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')

    const mainTitle = getMainTitle('Main Page')

    const product = getProductList()
    product.getProducts(`${URL}/wp-json/wp/v1/products?count=4`)
    
    page.append(mainTitle, product.productsList)
    return page
}
