import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export const Cycle = () => {
    const { state } = useTaskContext();
    
    const color: { [key: string]: string } = {
        workTime: styles.work_time,
        shortBreakTime: styles.rest_time,
        longBreakTime: styles.long_rest_time,
    };


    return (
        <div className={styles.cycle}>
            <span>Ciclos:</span>
            <div className={styles.cycle_dots}>
                {state.tasks.map(task => {
                    return (
                        <span
                            className={`${styles.cycle_dot} ${
                                color[task.type]
                            }`}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
};
