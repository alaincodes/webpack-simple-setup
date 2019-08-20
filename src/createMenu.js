import Octane from "./octane.png";
import Data from "./data.xml";

const newMenu = (title, content) => {
  const createTitle = document.createElement("h3");
  const createContent = document.createElement("p");

  createTitle.textContent = title;
  createContent.textContent = content;

  return { createTitle, createContent };
};

// const createMenu = () => {
//   const div = document.createElement("div");
//   div.style.height = "20vh";
//   div.style.background = "hotpink";

//   div.setAttribute("id", "Menu1");
//   div.setAttribute("class", "menu-content");

//   const h1 = document.createElement("h1");
//   h1.textContent = "Menu One here";

//   const myImage = new Image(200);
//   myImage.src = Octane;

//   div.appendChild(myImage);

//   div.appendChild(h1);

//   console.log(Data);

//   return div;
// };

export default newMenu;
