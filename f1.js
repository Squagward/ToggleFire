import { Loader, toggle } from "./constants";

export default () => {
  const isPatcher = Loader.isModLoaded("patcher");
  if (!isPatcher) return toggle.toggle;

  return false;
};
