import displayMenu from "./displayMenu";

const menuTabs = () => {
  const TABS = document.getElementById("root");

  const tabsNav = document.createElement("nav");
  tabsNav.style.display = "flex";
  tabsNav.style.justifyContent = "center";

  const tabsUL = document.createElement("ul");
  tabsUL.style.display = "flex";
  tabsUL.style.listStyleType = "none";

  const menuOne = document.createElement("li");
  menuOne.setAttribute("id", "menuOne");
  menuOne.setAttribute("class", "menuTabs");
  menuOne.textContent = "Menu 1";
  menuOne.style.cursor = "pointer";
  menuOne.style.border = "1px solid red";
  menuOne.style.padding = "0.5rem";
  menuOne.style.margin = "0.3rem";

  const menuTwo = document.createElement("li");
  menuTwo.setAttribute("id", "menuTwo");
  menuTwo.setAttribute("class", "menuTabs");
  menuTwo.textContent = "Menu 2";
  menuTwo.style.cursor = "pointer";
  menuTwo.style.border = "1px solid red";
  menuTwo.style.padding = "0.5rem";
  menuTwo.style.margin = "0.3rem";

  const menuThree = document.createElement("li");
  menuThree.setAttribute("id", "menuThree");
  menuThree.setAttribute("class", "menuTabs");
  menuThree.textContent = "Menu 3";
  menuThree.style.cursor = "pointer";
  menuThree.style.border = "1px solid red";
  menuThree.style.padding = "0.5rem";
  menuThree.style.margin = "0.3rem";

  tabsUL.appendChild(menuOne);
  tabsUL.appendChild(menuTwo);
  tabsUL.appendChild(menuThree);

  tabsNav.appendChild(tabsUL);

  TABS.appendChild(tabsNav);

  const tabsElm = document.querySelectorAll(".menuTabs");

  tabsElm.forEach(elm => {
    elm.addEventListener("click", event => {
      console.log("clickekkeke");

      displayMenu(event);
    });
  });
};

export default menuTabs;
