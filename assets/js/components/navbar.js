import { createElement } from "react";

export default function Navbar() {
  const listMenu = [
    "CNN",
    "US",
    "World",
    "Politics",
    "Business",
    "Health",
    "Entertainment",
    "Style",
    "Travel",
    "Sports",
    "More",
  ];

  const subNavbar = [
    "Israel's isolation deepens",
    "Trump's war on the arts",
    "Prince William",
    "Versace's new era",
    "Tekken",
    "Female cabbies in Mexico City",
    "Selena Gomez weds Benny Blanco",
  ];

  const menuItems = listMenu.map((item, index) =>
    createElement(
      "li",
      {
        key: index,
        className:
          "cursor-pointer hover:bg-slate-700 hover:text-white hover:rounded-sm px-2 py-1",
      },
      item
    )
  );

  const navbarSub = subNavbar.map((item, index) =>
    createElement(
      "li",
      {
        key: index,
        className:
          "cursor-pointer hover:bg-slate-700 hover:text-white hover:rounded-sm px-2 py-1",
      },
      item
    )
  );

  return createElement(
    "nav",
    { className: "flex flex-col items-center w-full" },
    // Menu utama (responsive)
    createElement(
      "ul",
      {
        className:
          "hidden md:flex flex-wrap gap-2 px-4 pt-2 justify-center text-sm font-medium",
      },
      menuItems
    ),
    // Garis pemisah (hanya tampil di md ke atas)
    createElement("div", {
      className: "hidden md:block w-9/12 bg-black h-[1.5px] my-2",
    }),
    // Sub navbar (responsive)
    createElement(
      "ul",
      {
        className:
          "hidden md:flex flex-wrap gap-2 p-2 justify-center text-[10px] text-gray-800",
      },
      navbarSub
    )
  );
}
