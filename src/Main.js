const Main = () => {
  const HeadSection = document.createElement("section");
  HeadSection.style.height = "80vh";
  HeadSection.style.background = "papayawhip";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Amazing";
  h1.style.textAlign = "center";

  const menuBtn1 = document.createElement("button");

  HeadSection.appendChild(h1);

  return HeadSection;
};

export default Main;
