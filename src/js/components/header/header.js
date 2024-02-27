import { router } from "/src/js/main";
import "./header.css";

function getNavigationLink(path, title = "") {
  let link = document.createElement("a");
  link.href = path;
  link.classList.add("btn");
  link.textContent = title;
  /* link1.setAttribute('data-navigo', true) */
  link.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(path);
  });
  return link;
}

// Create Header
export function getHeader() {
  //Create Header block
  const header = document.createElement("header");
  header.classList.add("header");
  //Create div container into Header block
  const container = document.createElement("div");
  container.classList.add("container", "header__container");
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
  container.append(nav);
  header.append(container);
  return header;
}
