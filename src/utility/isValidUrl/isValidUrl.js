import { urlPattern } from "constants/RexExps";

export const isValidUrl = (urlString) => {
    return urlPattern.test(urlString);
};
