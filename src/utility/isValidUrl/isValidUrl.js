import { urlPattern } from "constants/RegExps";

export const isValidUrl = (urlString) => {
    return urlPattern.test(urlString);
};
