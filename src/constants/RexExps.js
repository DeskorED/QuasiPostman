export const urlPattern = new RegExp(
    "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
    "i"
);
export const headerKeyRegExp = new RegExp("^[a-zA-Z0-9_-]*$");
export const headerValueRegExp = new RegExp(
    "^[a-zA-Z0-9_:;.,\\\\/\"'?!(){}\\[\\]@<>=\\-+*#$&`|~^% ]*$"
);
