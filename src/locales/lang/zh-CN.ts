import { getMessage } from "./helper";
const modules = import.meta.globEager(`./zh-CN/*.ts`);
// key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
export default getMessage(modules, "zh-CN");
