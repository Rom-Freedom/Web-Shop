import { router } from "/src/js/main";
import { getNavigationLink } from '/src/js/components/navigationLink/navigationLink.js'
import { getLogo } from '/src/js/components/logo/logo/'
import { getBasketBtn } from '/src/js/components/basketBtn/basketBtn/'
import "./header.css";

// Create Header
export function getHeader() {
  //Create Header block
  const header = document.createElement("header");
  header.classList.add("header");
  //Create div container into Header block
  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const logo = getLogo()
  logo.classList.add('header__logo')

  const basketBtn = getBasketBtn() 

  //Create navigation menu
  const nav = document.createElement("nav");
  nav.classList.add("header__navigation");

  //Create free nav buttons
  let link1 = getNavigationLink("/", "Main page");
  let link2 = getNavigationLink("/catalog", "Catalogue");
  let link3 = getNavigationLink("/basket", "Bucket");

  //Add links into nav menu
  nav.append(link1, link2, link3);
  //Add nav to container
  container.append(logo, nav, basketBtn);
  header.append(container);
  return header;
}
