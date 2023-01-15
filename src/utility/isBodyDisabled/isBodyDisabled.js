import { methods } from "../../constants/Constants";

export const isBodyDisabled = (method) => {
  return method === methods?.GET || method === methods?.HEAD;
};
