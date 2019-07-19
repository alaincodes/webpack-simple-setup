const MenuTwo = () => {
  const div = document.createElement("div");
  div.style.height = "20vh";
  div.style.background = "gold";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu Two here";

  div.appendChild(h1);

  return div;
};

export default MenuTwo;
