import { getHeader } from './components/header.js'
import { getPageContainer } from './components/pageContainer.js'
import { getMainTitle} from './components/mainTitle.js'
import { getDesc } from './components/desc.js'

const app = document.getElementById('app')

const header = getHeader()
const pageContainer = getPageContainer()

//Navigation
export async function navigation(page) {
    pageContainer.innerHTML = ''
    switch (page) {
      case 'catalog':
        const ModuleCatalog = await import('./pages/catalog.js')
        const catalogPage = ModuleCatalog.getCatalogPage() 
        pageContainer.append(catalogPage)
        break
      case 'basket':
        const ModuleBasket = await import('./pages/basket.js')
        const BasketPage = ModuleBasket.getBasketPage() 
        pageContainer.append(BasketPage)
        break
      default:
        const ModuleMain = await import('./pages/main.js')
        const mainPage = ModuleMain.getMainPage()
        pageContainer.append(mainPage)
        break
    }
}

navigation()

const router = new Navigo('/');

app.append(header, pageContainer)