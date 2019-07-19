import _ from "lodash";
import Header from "./Header";
import Main from "./Main";

// const CSSReset = document.documentElement;
// CSSReset.setAttribute(
//   "style",
//   "background: red; margin: 0; padding: 0; box-sizing: border-box;"
// );

const ROOT = document.getElementById("root");
ROOT.appendChild(Header());
ROOT.appendChild(Main());
