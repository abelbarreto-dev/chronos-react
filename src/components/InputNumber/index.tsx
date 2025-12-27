import type { Ref } from "react";
import styles from "./styles.module.css";

type InputNumberProps = {
    id: string;
    labelText: string;
    ref?: Ref<HTMLInputElement>,
    placeHolder?: string;
    defaultValue?: number;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputNumber = ({
    id,
    labelText,
    ref,
    placeHolder,
    defaultValue,
    value,
    onChange,
}: InputNumberProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                className={styles.input}
                type="number"
                ref={ref}
                placeholder={placeHolder}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
            />
        </>
    );
};
