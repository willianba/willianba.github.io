import m, { Vnode } from "mithril";
import "./Subtitle.css";

export const Subtitle = () => {
  return {
    view: (vnode: Vnode<{ text: string }>) => {
      return m(".subtitle", vnode.attrs.text);
    },
  };
};
