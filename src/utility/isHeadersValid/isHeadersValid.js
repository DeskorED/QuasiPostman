export const isHeadersValid = (headers) => {
    Object.values(headers).forEach((header) => {
        if (header.keyError || header.valueError) {
            return true;
        }
    });
    return false;
};
