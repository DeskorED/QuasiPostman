import { HTTPmethods } from "constants/Constants";

export const isBodyDisabled = (method) => {
    return method === HTTPmethods?.GET || method === HTTPmethods?.HEAD;
};
