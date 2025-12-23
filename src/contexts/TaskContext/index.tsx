import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

export const TaskContext = createContext({
    key: {} as TaskStateModel,
});
