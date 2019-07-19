const MenuThree = () => {
  const div = document.createElement("div");
  div.style.height = "20vh";
  div.style.background = "rebeccapurple";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu Three here";

  div.appendChild(h1);

  return div;
};

export default MenuThree;
