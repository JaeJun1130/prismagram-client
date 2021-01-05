import { useState } from "react";

export const UserInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        setValue(value);
    };

    return { value, onChange };
};
