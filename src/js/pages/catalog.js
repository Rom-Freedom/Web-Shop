import { getMainTitle} from '/src/js/components/mainTitle/mainTitle.js'
import { getProductList } from '/src/js/components/productsList/productsList.js'
import { URL } from '/src/js/config.js'


//Catalog
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page')

    const mainTitle = getMainTitle('Catalog')
    
    const product = getProductList()
    product.getProducts(`${URL}/wp-json/wp/v1/products`)

    page.append(mainTitle, product.productsList)
    return page
}