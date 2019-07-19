const MenuOne = () => {
  const div = document.createElement("div");
  div.style.height = "20vh";
  div.style.background = "hotpink";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu One here";

  div.appendChild(h1);

  return div;
};

export default MenuOne;
