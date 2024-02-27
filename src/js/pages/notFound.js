import { getMainTitle} from '/src/js/components/mainTitle.js'

//The page wasn't found
export function getNotFoundPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('The page was not found!')

    page.append(mainTitle)
    return page
}