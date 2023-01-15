import { urlPattern } from "../../constants/Constants";

export const isValidUrl = (urlString) => {
  return !urlPattern.test(urlString);
};
