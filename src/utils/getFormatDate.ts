import { format } from "date-fns";

export const getFormatDate = (timestamp: number) => {
    const date = new Date(timestamp);

    return format(date, "dd/MM/yyyy HH:mm");
};
