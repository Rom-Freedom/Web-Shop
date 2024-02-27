import { router } from '/src/js/main'
import { getMainTitle} from '/src/js/components/mainTitle/mainTitle.js'
import { getDesc } from '/src/js/components/desc/desc.js'

//Basket
export function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')

    const mainTitle = getMainTitle('Basket')
    const catalog = getDesc('The page is under construction')

// Order Registration Button
    let linkOrder = document.createElement('a')
    linkOrder.href = '/order'
    linkOrder.classList.add('btn')
    linkOrder.textContent = 'Order registration'

    linkOrder.addEventListener('click', function(event) {
        event.preventDefault()
        router.navigate('/order');
    })

    page.append(mainTitle, catalog, linkOrder)
    return page
}