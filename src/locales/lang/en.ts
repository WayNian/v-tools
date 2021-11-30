import { getMessage } from "./helper";
const modules = import.meta.globEager(`./en/*.ts`);
export default getMessage(modules, "en");
