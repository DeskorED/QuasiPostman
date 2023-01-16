import { headerValueRegExp } from "../../constants/Constants";

export const valueErrorHandler = (id, value, errors, setErrors) => {
    let newErrors = [...errors];

    const hasError = newErrors.find((error) => error.id === id);

    const isError = !headerValueRegExp.test(value);

    if (!hasError && isError) {
        newErrors.push({
            id: id,
            value: true,
        });
    } else if (hasError && isError) {
        newErrors = newErrors.map((error) =>
            error.id === id ? { id: id, key: error.key, value: true } : error
        );
    } else if (hasError && !isError) {
        newErrors = newErrors.map((error) =>
            error.id === id
                ? { id: id, key: error.key, value: undefined }
                : error
        );
    }

    setErrors(
        newErrors.filter(
            (error) => error.key !== undefined || error.value !== undefined
        )
    );
};
