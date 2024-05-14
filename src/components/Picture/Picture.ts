import m from "mithril";
import "./Picture.css";

export const Picture = () => {
  return {
    view: () => {
      return m(
        ".box",
        m(".card", [
          m("img", {
            class: "picture",
            src: "https://github.com/willianba.png",
          }),
          m(".blob"),
        ]),
      );
    },
  };
};
