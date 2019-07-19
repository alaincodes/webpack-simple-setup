import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";

const Main = () => {
  const HeadSection = document.createElement("section");
  HeadSection.style.height = "80vh";
  HeadSection.style.background = "papayawhip";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Amazing";
  h1.style.textAlign = "center";

  HeadSection.appendChild(h1);

  const menuArr = ["Menu 1", "Menu 2", "Menu 3"];
  menuArr.forEach((menu, index) => {
    const menuBtn = document.createElement("button");
    menuBtn.textContent = menu;
    menuBtn.id = index;

    HeadSection.appendChild(menuBtn);
  });

  return HeadSection;
};

export default Main;
