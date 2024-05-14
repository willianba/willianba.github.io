import m from "mithril";
import { App } from "./App";
import "./normalize.css";

const mountNode = document.querySelector("#app");

if (!mountNode) {
  throw new Error("Could not find mount node");
}

m.mount(mountNode, App);
