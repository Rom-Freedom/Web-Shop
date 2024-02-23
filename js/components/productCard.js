//Product Cards
export function getProductCard(title, price) {
    const item = document.createElement('li')
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-list__title')
    productTitle.textContent = title

    const Productprice = document.createElement('strong')
    Productprice.classList.add('product-list__price')
    Productprice.textContent = `${price} $`

    //Butoon for addition good to a button
    const addBasket = document.createElement('button')
    addBasket.classList.add('btn')
    addBasket.textContent = 'Add to basket'

    item.append(productTitle, Productprice, addBasket)
    return item
}