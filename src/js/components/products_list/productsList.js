import './getProductList.css'
//Product list component
export function getProductList() {
    const productList = document.createElement('div')
    productList.classList.add('product-list')

    return {
        productList,
    }
    
}