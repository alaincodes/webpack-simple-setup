import "./styles.css";
import Octane from "./octane.png";

const MenuOne = () => {
  const div = document.createElement("div");
  div.style.height = "20vh";
  div.style.background = "hotpink";

  div.setAttribute("id", "Menu1");
  div.setAttribute("class", "menu-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu One here";
  h1.classList.add("hello");

  const myImage = new Image();
  myImage.src = Octane;

  div.appendChild(myImage);

  div.appendChild(h1);

  return div;
};

export default MenuOne;
