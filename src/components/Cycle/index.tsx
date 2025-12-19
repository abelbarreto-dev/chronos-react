import styles from "./styles.module.css";

type CycleTypes = {
    typeCycle: "play" | "rest" | "long-rest";
}

export const Cycle = (
    { typeCycle }: CycleTypes
) => {
    const color = {
        "play": styles.play,
        "rest": styles.rest,
        "long-rest": styles.long_rest
    }[typeCycle];

    return (
        <div className={`${styles.cycle} ${color}`}>
            <span>Ciclos:</span>
            <div className={styles.cycle_dots}>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.rest_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.rest_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.rest_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.long_rest_time}`}></span>
            </div>
        </div>
    );
};
