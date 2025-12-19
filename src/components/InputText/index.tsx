import styles from "./styles.module.css";

type InputTextProps = {
    id: string;
    labelText: string;
    disabled?: boolean;
};

export const InputText = ({ id, labelText, disabled }: InputTextProps) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                className={styles.input}
                placeholder="Nome da tarefa"
                id={id}
                type="text"
                disabled={disabled}
            />
        </>
    );
};
