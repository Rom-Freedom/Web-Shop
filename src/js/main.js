import Navigo from 'navigo'
import { getHeader } from './components/header.js'
import { getPageContainer } from './components/pageContainer.js'
import { getMainTitle} from './components/mainTitle.js'
import { getDesc } from './components/desc.js'

const app = document.getElementById('app')


export const router = new Navigo('/');

const header = getHeader()
const pageContainer = getPageContainer()


router.on('/', async () => {
    pageContainer.innerHTML = ''
    const ModuleMain = await import('./pages/main.js')
    const mainPage = ModuleMain.getMainPage()
    pageContainer.append(mainPage)
});

router.on('/catalog', async () => {
    pageContainer.innerHTML = ''
    const ModuleCatalog = await import('./pages/catalog.js')
    const catalogPage = ModuleCatalog.getCatalogPage() 
    pageContainer.append(catalogPage)
});

router.on('/basket', async () => {
    pageContainer.innerHTML = ''
    const ModuleBasket = await import('./pages/basket.js')
    const BasketPage = ModuleBasket.getBasketPage() 
    pageContainer.append(BasketPage)
});

//When is clicked by the product is imported product js module
router.on('/product', async () => {
    pageContainer.innerHTML = ''
    const ModuleProduct = await import('./pages/product.js')
    const productPage = ModuleProduct.getProductPage() 
    pageContainer.append(productPage)
});

router.resolve();

app.append(header, pageContainer)