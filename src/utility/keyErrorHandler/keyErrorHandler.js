import { headerKeyRegExp } from "../../constants/Constants";

export const keyErrorHandler = (id, key, errors, setErrors) => {
    let newErrors = [...errors];

    const hasError = newErrors.find((error) => error.id === id);

    const isError = !headerKeyRegExp.test(key);

    if (!hasError && isError) {
        newErrors.push({
            id: id,
            key: true,
        });
    } else if (hasError && isError) {
        newErrors = newErrors.map((error) =>
            error.id === id ? { id: id, key: true, value: error.value } : error
        );
    } else if (hasError && !isError) {
        newErrors = newErrors.map((error) =>
            error.id === id
                ? { id: id, key: undefined, value: error.value }
                : error
        );
    }

    setErrors(
        newErrors.filter(
            (error) => error.key !== undefined || error.value !== undefined
        )
    );
};
