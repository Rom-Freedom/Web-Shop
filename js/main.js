import { getHeader } from './components/header.js'
import { getPageContainer } from './components/pageContainer.js'
import { getMainTitle} from './components/mainTitle.js'
import { getDesc } from './components/desc.js'

//Pages
import { getMainPage } from './pages/main.js'
import { getProductPage } from './pages/product.js'
import { getCatalogPage } from './pages/catalog.js'
import { getBasketPage } from './pages/basket.js'

const app = document.getElementById('app')



const header = getHeader()
const pageContainer = getPageContainer()

//Navigation
export function navigation(page) {
    pageContainer.innerHTML = ''
    switch (page) {
      case 'catalog':
        const catalogPage = getCatalogPage() 
        pageContainer.append(catalogPage)
        break
      case 'basket':
        const BasketPage = getBasketPage() 
        pageContainer.append(BasketPage)
        break
      default:
        const mainPage = getMainPage()
        pageContainer.append(mainPage)
        break
    }
}

navigation()

app.append(header, pageContainer)