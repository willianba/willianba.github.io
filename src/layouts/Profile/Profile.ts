import m from "mithril";
import "./Profile.css";
import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { Social } from "../../components/Social";
import { Description } from "../../components/Description";
import { Picture } from "../../components/Picture";

export const Profile = () => {
  return {
    view: () => {
      return m(".profile.fade-in", [
        m(".content", [
          m(Picture),
          m(Title, { text: "Willian Alves" }),
          m(Subtitle, { text: "Senior Software Engineer" }), // TODO move to constant
          m(Description, {
            text: "an IT professional with solid knowledge in software development and devops, dealing with different technologies and following best practices to achieve the deployment of highly available and scalable applications. i'm also into music, videogames, and memes",
          }),
          m(Social),
        ]),
      ]);
    },
  };
};
