import './productsList.css'
import { getProductCard } from '/src/js/components/productCard/productCard.js'
//Product list component
export function getProductList() {
    const productsList = document.createElement('div')
    productsList.classList.add('product-list')

    const getProducts = async function (URI) {
        const response = await fetch('https://shop-frontent.ru/wp-json/wp/v1/products')

        const data = await response.json()

        const list = document.createElement('ul')
        list.classList.add('product-list__list')
        for (const product of data) {
            const productCard =  getProductCard(product)
            list.append(productCard)
        }

        productsList.append(list)
    }

    return {
        productsList,
        getProducts
    }    
}