import { toggle } from "./constants";

register("command", () => {
  toggle.toggle = !toggle.toggle;
  ChatLib.chat(`ToggleFire: ${toggle.toggle ? "on" : "off"}`);
}).setName("togglefire");
