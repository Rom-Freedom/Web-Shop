import './productsList.css'
//Product list component
export function getProductList() {
    const productsList = document.createElement('div')
    productsList.classList.add('product-list')

    const getProducts = async function (URI) {
        const response = await fetch('https://shop-frontent.ru/wp-json/wp/v1/products')
        console.log(response);
    }

    return {
        productsList,
        getProducts
    }    
}