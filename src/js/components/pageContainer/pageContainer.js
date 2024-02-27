import './pageContainer.css'
/* Container Page (a block for all pages) */
export function getPageContainer() {
    const main = document.createElement('main')
    main.classList.add('page-container')
    return main
}
