import appName from "./getAppName";
import readTextFile from "./readTextFile";

export const kapFile = JSON.parse(
  await readTextFile(appName + ".kap")
);

export default kapFile;