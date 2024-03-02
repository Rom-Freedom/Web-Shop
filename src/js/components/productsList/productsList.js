import './productsList.css'
import { getProductCard } from '/src/js/components/productCard/productCard.js'
//Product list component
export function getProductList() {
    const productsList = document.createElement('div')
    productsList.classList.add('product-list')

    const getProducts = async function (URI) {

        try {
            const response = await fetch(URI)
            if (response.status === 404) {
                throw new Error('Goods are not found!')
            }

            const data = await response.json()

            const list = document.createElement('ul')
            list.classList.add('product-list__list')
            for (const product of data) {
                const productCard =  getProductCard(product)
                list.append(productCard)
            }

            productsList.append(list)

        } catch (error) {
            const msg = document.createElement('span')
            msg.classList.add('products-list__msg')
            msg.textContent = error.message
            productsList.append(msg)
        }
    
    }

    return {
        productsList,
        getProducts
    }    
}