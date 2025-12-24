import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export const Tips = () => {
    const { state } = useTaskContext();

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const tipsActiveTask = {
        workTime: (
            <p>
                Nesse ciclo <strong>mantenha o foco</strong> por{" "}
                <strong>{state.config.workTime} min.</strong>
            </p>
        ),
        shortBreakTime: (
            <p>
                Nesse ciclo <strong>descanse</strong> por{" "}
                <strong>{state.config.shortBreakTime} min.</strong>
            </p>
        ),
        longBreakTime: (
            <p>
                Nesse ciclo <strong>descanse</strong> por{" "}
                <strong>{state.config.longBreakTime} min.</strong>
            </p>
        ),
    };

    const tipsDeactiveTask = {
        workTime: (
            <p>
                Próximo ciclo <strong>mantenha o foco</strong> por{" "}
                <strong>{state.config.workTime} min.</strong>
            </p>
        ),
        shortBreakTime: (
            <p>
                Próximo ciclo <strong>descanse</strong> por{" "}
                <strong>{state.config.shortBreakTime} min.</strong>
            </p>
        ),
        longBreakTime: (
            <p>
                Próximo ciclo <strong>descanse</strong> por{" "}
                <strong>{state.config.longBreakTime} min.</strong>
            </p>
        ),
    };

    return (
        <>
            {state.activeTask
                ? tipsActiveTask[state.activeTask.type]
                : tipsDeactiveTask[nextCycleType]}
        </>
    );
};
