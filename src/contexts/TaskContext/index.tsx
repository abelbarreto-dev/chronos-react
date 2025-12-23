import { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsReamaining: 0,
    formatedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue: TaskContextProps = {
    state: initialState,
    setState: () => {},
};

export const TaskContext = createContext(initialContextValue);

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => (
    <TaskContext.Provider value={initialContextValue}>{children}</TaskContext.Provider>
);

export const useTaskContext = () => {
    return useContext(TaskContext);
}
