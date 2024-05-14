import m, { Vnode } from "mithril";
import "./Title.css";

type TitleProps = {
  text: string;
};

export const Title = () => {
  return {
    view: (vnode: Vnode<TitleProps>) => {
      return m(".title", `${vnode.attrs.text} `);
    },
  };
};
