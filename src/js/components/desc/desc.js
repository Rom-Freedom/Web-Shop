import './desc.css'

//Description of a good
export function getDesc(text) {
    const desc = document.createElement('p')
    desc.classList.add('desc')
    desc.textContent = text
    return desc
}