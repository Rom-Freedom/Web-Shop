import Navigo from 'navigo'
import { getHeader } from '/src/js/components/header/header.js'
import { getPageContainer } from '/src/js/components/pageContainer/pageContainer.js'
import { getMainTitle} from './components/mainTitle/mainTitle.js'
import { getDesc } from './components/desc/desc.js'

const app = document.getElementById('app')

export const router = new Navigo('/');

const header = getHeader()
const pageContainer = getPageContainer()


router.on('/', async () => {
    pageContainer.innerHTML = ''
    const ModuleMain = await import('/src/js/pages/main.js')
    const mainPage = ModuleMain.getMainPage()
    pageContainer.append(mainPage)
    header.setActiveLink('home')
});

router.on('/catalog', async () => {
    pageContainer.innerHTML = ''
    const ModuleCatalog = await import('/src/js/pages/catalog.js')
    const catalogPage = ModuleCatalog.getCatalogPage() 
    pageContainer.append(catalogPage)
    header.setActiveLink('catalog')
});

//When is clicked by the product is imported product js module
router.on('/product/:title', async ({ data }) => {
    pageContainer.innerHTML = ''
    const ModuleProduct = await import('/src/js/pages/product.js')
    const productPage = ModuleProduct.getProductPage(data.title) 
    pageContainer.append(productPage)
    header.setActiveLink()
});

router.on('/basket', async () => {
    pageContainer.innerHTML = ''
    const ModuleBasket = await import('/src/js/pages/basket.js')
    const BasketPage = ModuleBasket.getBasketPage() 
    pageContainer.append(BasketPage)
    header.setActiveLink('basket')
});

// Order
router.on('/order', async () => {

    if (true) {
        router.navigate('/');
        return
    }

    pageContainer.innerHTML = ''
    const ModuleOrder = await import('/src/js/pages/order.js')
    const OrderPage = ModuleOrder.getOrderPage()
    pageContainer.append(OrderPage)
    header.setActiveLink()
});

// A page is not found
router.notFound(async () => {
    pageContainer.innerHTML = ''
    const ModuleNotFound = await import('/src/js/pages/notFound.js')
    const NotFoundPage = ModuleNotFound.getNotFoundPage()
    pageContainer.append(NotFoundPage)
    header.setActiveLink()
});

router.resolve();

app.append(header.header, pageContainer)