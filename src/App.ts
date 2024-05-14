import m from "mithril";
import { Profile } from "./layouts/Profile";
import "./App.css";

export const App = () => {
  return {
    view: () => {
      return m(Profile);
    },
  };
};
