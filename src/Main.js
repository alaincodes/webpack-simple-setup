import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";

const Main = () => {
  const HeadSection = document.createElement("section");
  HeadSection.style.height = "80vh";
  HeadSection.style.background = "papayawhip";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Amazingggg";
  h1.style.textAlign = "center";

  HeadSection.appendChild(h1);

  const menuArr = ["Menu 1", "Menu 2", "Menu 3"];
  menuArr.forEach(menu => {
    const menuBtn = document.createElement("button");
    menuBtn.textContent = menu;
    menuBtn.setAttribute("class", "menu-links");
    menuBtn.setAttribute("id", "menu-links");
    // Add an ID for each buttons using index.. good idea ?..
    // menuBtn.id = index;

    menuBtn.addEventListener("click", function toggleMenuTabs() {
      if (menuBtn.id == "menu-links") {
        HeadSection.appendChild(Menu1());
      } else if (menuBtn.className == "Menu2") {
        HeadSection.appendChild(Menu2());
      } else if (menuBtn.className == "Menu3") {
        HeadSection.appendChild(Menu3());
      }
    });

    HeadSection.appendChild(menuBtn);
  });

  // HeadSection.appendChild(Menu1());
  // HeadSection.appendChild(Menu2());
  // HeadSection.appendChild(Menu3());

  function openMenu(event, menuName) {
    var i, menuContent, menuLinks;
    menuContent = document.getElementsByClassName("menu-content");
    for (i = 0; i < menuContent.length; i++) {
      menuContent[i].style.display = none;
    }

    menuLinks = document.getElementsByClassName("menu-links");
    for (i = 0; i < menuLinks.length; i++) {
      menuLinks[i].className = menuLinks[i].className.replace(" active", "");
    }

    document.getElementById(menuName).style.display = "block";
    event.currentTarget.className += " active";
  }

  return HeadSection;
};

export default Main;
