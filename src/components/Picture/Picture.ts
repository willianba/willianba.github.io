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
            src: "profile.jpg",
            alt: "Profile picture",
          }),
          m(".blob"),
        ]),
      );
    },
  };
};
