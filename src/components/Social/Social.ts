import m from "mithril";
import "./Social.css";
import { Icon } from "../Icon";

export const Social = () => {
  return {
    view: () => {
      return m(".social", [
        m(Icon, { icon: "email" }),
        m(Icon, { icon: "linkedin" }),
        m(Icon, { icon: "github" }),
        m(Icon, { icon: "intagram" }),
      ]);
    },
  };
};
