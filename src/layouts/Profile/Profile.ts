import m from "mithril";
import "./Profile.css";
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { Social } from "../../components/Social";
import { Description } from "../../components/Description";
import { Picture } from "../../components/Picture";
import t from "../../i18n/t";

export const Profile = () => {
  return {
    view: () => {
      return m(".profile.fade-in", [
        m(".content", [
          m(Picture),
          m(Title, { text: "Willian Bandeira Alves" }),
          m(Subtitle, { text: t.role() }),
          m(Description, { text: t.about_me() }),
          m(Social),
        ]),
      ]);
    },
  };
};
