export const getMessage = (
  modules: Record<string, Record<string, any>>,
  prefix = "zh-CN"
) => {
  const messages = {};
  for (const key in modules) {
    const fileName = key
      .replace(`./${prefix}/`, "")
      .replace(/^\.\//, "")
      .split(".")[0];

    messages[fileName] = modules[key].default;
  }
  return messages;
};
