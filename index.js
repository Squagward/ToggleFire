import { Loader, toggle } from "./constants";

register("command", () => {
  const isPatcher = Loader.isModLoaded("patcher");
  if (isPatcher) {
    ChatLib.chat("ToggleFire: This module is not compatible with Patcher.");
    return;
  }

  toggle.toggle = !toggle.toggle;
  ChatLib.chat(`ToggleFire: ${toggle.toggle ? "on" : "off"}`);
}).setName("togglefire");
