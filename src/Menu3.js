const MenuThree = () => {
  const div = document.createElement("div");
  div.style.height = "20vh";
  div.style.background = "rebeccapurple";

  div.setAttribute("id", "Menu3");
  div.setAttribute("class", "menu-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu Three here";

  div.appendChild(h1);

  return div;
};

export default MenuThree;
