import m from "mithril";
import "./Profile.css";
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { Social } from "../../components/Social";

export const Profile = () => {
  return {
    view: () => {
      return m(".profile.fade-in", [
        m(".content", [
          m(Title, { text: "Willian Alves" }),
          m(Subtitle, { text: "Software Engineer" }), // TODO move to constant
          m(Social),
        ]),
      ]);
    },
  };
};
