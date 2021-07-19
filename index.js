let toggle = FileLib.read("ToggleFire", "toggle.txt");

register("command", () => {
  toggle = !toggle;
  FileLib.write("ToggleFire", "toggle.txt", toggle);
}).setName("togglefire");
