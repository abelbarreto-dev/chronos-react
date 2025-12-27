import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { type ToastContentProps } from "react-toastify";

import { Button } from "../Button";

import styles from "./styles.module.css";

export const Dialog = ({ closeToast, data }: ToastContentProps<string>) => (
    <>
        <div className={styles.container}>
            <p>{data}</p>

            <div className={styles.buttonsContainer}>
                <Button
                    id={"dialog-button"}
                    type={"button"}
                    onClick={() => closeToast(true)}
                    icon={<ThumbsUpIcon />}
                    ariaLabel={"Confirmar Ação de Confirmar e Fechar"}
                    title={"Confirmar Ação de Confirmar e Fechar"}
                />
                <Button
                    id={"dialog-button"}
                    type={"button"}
                    onClick={() => closeToast(false)}
                    icon={<ThumbsDownIcon />}
                    ariaLabel={"Confirmar Ação de Sair e Fechar"}
                    title={"Confirmar Ação de Sair e Fechar"}
                    color={"red"}
                />
            </div>
        </div>
    </>
);
