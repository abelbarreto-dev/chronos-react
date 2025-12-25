import { toast } from "react-toastify";

export const showMessage = {
    error: (message: string) => toast.error(message),
    info: (message: string) => toast.info(message),
    success: (message: string) => toast.success(message),
    warn: (message: string) => toast.warn(message),
    warning: (message: string) => toast.warning(message),
    dismiss: () => toast.dismiss(),
};
