import m, { Vnode } from "mithril";
import "./Icon.css";

type Icon = {
  url: string;
  path: string;
  alt?: string;
};

type AvailableIcons = {
  github: Icon;
  linkedin: Icon;
  email: Icon;
  instagram: Icon;
};

const availableIcons: AvailableIcons = {
  github: {
    url: "https://github.com/willianba",
    path: "/github.svg",
    alt: "Github",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/willianba/",
    path: "/linkedin.svg",
    alt: "Linkedin",
  },
  email: {
    url: "mailto:wba.alves@gmail.com",
    path: "/email.svg",
    alt: "Email",
  },
  instagram: {
    url: "https://www.instagram.com/wbaalves/",
    path: "/instagram.svg",
    alt: "Instagram",
  },
};

type IconProps = {
  icon: keyof AvailableIcons;
};

export const Icon = () => {
  return {
    view: (vnode: Vnode<IconProps>) => {
      const icon = availableIcons[vnode.attrs.icon];

      return m(
        "a",
        {
          target: "_blank",
          href: icon.url,
        },
        [
          m("img", {
            class: "icon",
            src: icon.path,
            alt: icon.alt ?? vnode.attrs.icon,
          }),
        ],
      );
    },
  };
};
