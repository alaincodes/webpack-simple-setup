import Octane from "./octane.png";
import Data from "./data.xml";

const MenuOne = () => {
  const div = document.createElement("div");
  div.style.height = "20vh";
  div.style.background = "hotpink";

  div.setAttribute("id", "Menu1");
  div.setAttribute("class", "menu-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu One here";

  const myImage = new Image();
  myImage.src = Octane;

  div.appendChild(myImage);

  div.appendChild(h1);

  console.log(Data);

  return div;
};

export default MenuOne;
