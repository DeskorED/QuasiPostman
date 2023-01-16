import { isValidUrl } from "../isValidUrl";

export const isErrors = (errors, url) => {
    if (errors?.length > 0) {
        return true;
    }
    return !isValidUrl(url);
};
