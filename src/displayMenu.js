import newMenu from "./createMenu";

const displayMenu = event => {
  const menuTitleContainer = document.getElementById("root");

  const menuTabs = document.createElement("div");

  const menuTitle = document.createElement("h3");

  switch (event.target.id) {
    case "menuOne":
      menuTabs.innerHTML = menuOne;
      break;
    case "menuTwo":
      menuTitle.innerHTML = `<p>Menu 2</p>`;
      break;
    case "menuThree":
      menuTitle.innerHTML = `<p>Menu 3</p>`;
      break;
  }

  menuTabs.appendChild(menuTitle);
  menuTitleContainer.appendChild(menuTabs);
};

const menuOne = newMenu("Menu 1", "Cheese");

export default displayMenu;
