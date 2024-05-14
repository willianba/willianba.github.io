import m, { Vnode } from "mithril";
import "./Title.css";

export const Title = () => {
  return {
    view: (vnode: Vnode<{ text: string }>) => {
      return m(".title", `${vnode.attrs.text} `);
    },
  };
};
