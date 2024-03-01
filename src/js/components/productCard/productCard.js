import { router } from '/src/js/main'
import './productCard.css'

//Product Cards
export function getProductCard(product) {
    const item = document.createElement('li')
    item.classList.add('product')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product__title')

    const productPreview = document.createElement('img')
    productPreview.classList.add('product__preview')
    productPreview.src = product.preview

    let ProductLink = document.createElement('a')
    ProductLink.textContent = product.title
    ProductLink.href = ''

    ProductLink.addEventListener('click', function(event) {
        event.preventDefault()
        router.navigate(`/product/${product.id}`);
    })

    productTitle.append(ProductLink)

    const Productprice = document.createElement('strong')
    Productprice.classList.add('product__price')
    Productprice.textContent = `${product.price} $`

    //Butoon for addition good to a button
    const addBasket = document.createElement('button')
    addBasket.classList.add('btn', 'product__add-basket-btn')
    addBasket.textContent = 'Add to basket'

    item.append(productPreview, productTitle, Productprice, addBasket)
    return item
}