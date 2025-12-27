import { toast } from "react-toastify";
import { Dialog } from "../components/Dialog";

export const showMessage = {
    error: (message: string) => toast.error(message),
    info: (message: string) => toast.info(message),
    success: (message: string) => toast.success(message),
    warn: (message: string) => toast.warn(message),
    warning: (message: string) => toast.warning(message),
    dismiss: () => toast.dismiss(),
    confirm: (data: string, onClosing: (reason: boolean) => void) => {
        toast(Dialog, {
            data: data,
            onClose: reason => {
                if (reason) return onClosing(true);
                return onClosing(false);
            },
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
            draggable: false,
        });
    },
};
