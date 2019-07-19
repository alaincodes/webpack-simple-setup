const MenuTwo = () => {
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  h1.textContent = "Menu Two here";

  section.appendChild(h1);

  return section;
};

export default MenuTwo;
