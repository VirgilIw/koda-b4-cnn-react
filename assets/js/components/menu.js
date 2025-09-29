import { createElement } from "react";

export default function () {
  return createElement(
    "div",
    {
      className:
        "w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 auto-rows-min",
    },
    createElement(
      "div",
      { className: "flex flex-col gap-2" },
      createElement("img", {
        src: "assets/img/image.png",
        alt: "image",
        className:
          "w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover rounded-md hover:scale-105 transition",
      })
    ),
    createElement(
      "div",
      { className: "flex flex-col items-center gap-2" },
      createElement(
        "h1",
        { className: "text-center text-sm md:text-base lg:text-lg font-bold" },
        "Nature is the place for our future"
      ),
      createElement("img", {
        src: "assets/img/foto2.png",
        alt: "foto2",
        className:
          "w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover rounded-xl hover:scale-105 transition",
      }),
      createElement(
        "p",
        { className: "text-center text-sm md:text-base lg:text-base" },
        "Scientists have created rechargeable, multicolored, glow-in-the-dark succulent plants, “Picture the world of Avatar, where glowing plants light up an entire ecosystem,” biologist Shuting Liu, a researcher at South China Agricultural University in Guangzhou and co-author of the study published August 27 in the journal Matter, said in a statement.Liu acknowledged that the plants “are still far from providing functional illumination, as their luminescence intensity remains too weak for practical lighting applications. Additionally, the safety assessment of afterglow particles for both plants and animals is still ongoing.”"
      )
    ),
    createElement(
      "div",
      { className: "flex flex-col items-center gap-2" },
      createElement("video", {
        src: "assets/img/shortvid.mp4",
        controls: true,
        autoPlay: true,
        loop: true,
        muted: true,
        controlsList: "nofullscreen nodownload noremoteplayback",
        className:
          "w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-md hover:scale-105 transition",
      }),
      createElement(
        "p",
        {
          className: "text-center text-sm md:text-base lg:text-base font-bold",
        },
        "Welcome to the Earth"
      ),
      createElement("img", {
        src: "assets/img/dog.png",
        alt: "dog",
        className:
          "w-full h-[160px] md:h-[200px] lg:h-[280px] object-cover rounded-md hover:scale-105 transition",
      })
    ),
    createElement(
      "div",
      { className: "flex flex-col items-center gap-2" },
      createElement("p", {
        className: "text-center text-sm md:text-base lg:text-base",
      }),
      createElement("img", {
        src: "assets/img/nature.png",
        alt: "nature",
        className:
          "w-full h-[150px] lg:mt-[-280px] md:h-[200px] lg:h-[250px] object-cover rounded-md hover:scale-105 transition",
      })
    )
  );
}
