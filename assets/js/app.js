// entry point components

import { createElement } from "react";
import navbar from "../js/components/navbar";
import menu from "./components/menu";

export default function () {
  return createElement(
    "div",
    {},
    createElement(navbar),
    createElement("div", {}, createElement(menu))
  );
}
