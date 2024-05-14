import m, { Vnode } from "mithril";
import "./Description.css";

type DescriptionProps = {
  text: string;
};

export const Description = () => {
  return {
    view: (vnode: Vnode<DescriptionProps>) => {
      return m(".description", m("p", vnode.attrs.text));
    },
  };
};
