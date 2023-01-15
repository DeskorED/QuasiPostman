import { isValidUrl } from "../isValidUrl";

export const isErrors = (errors, url) => {
  if (errors?.length > 0) {
    return;
  }
  return isValidUrl(url);
};
