import Header from "./Header";
import menuTabs from "./menuTabs";
import "./styles.css";

const ROOT = document.getElementById("root");
ROOT.appendChild(Header());
ROOT.appendChild(menuTabs());
