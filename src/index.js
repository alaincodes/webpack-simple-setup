import Header from "./components/Header";
import menuTabs from "./components/menuTabs";
import "./styles.scss";

const ROOT = document.getElementById("root");
ROOT.appendChild(Header());
ROOT.appendChild(menuTabs());
