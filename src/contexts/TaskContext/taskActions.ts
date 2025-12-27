import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
    START_TASK = "START_TASK",
    INTERRUPT_TASK = "INTERRUPT_TASK",
    CLEAR_STATE = "CLEAR_STATE",
    THE_FINAL_COUNT_DOWN = "THE_FINAL_COUNT_DOWN",
    COMPLETE_TASK = "COMPLET_TASK",
    REFLASH_TASK = "REFLASH_TASK",
}

export type TaskActionModel =
    | {
          type: TaskActionTypes.START_TASK;
          payload: TaskModel;
      }
    | {
          type: TaskActionTypes.INTERRUPT_TASK;
      }
    | {
          type: TaskActionTypes.THE_FINAL_COUNT_DOWN;
          payload: { secondsReamaining: number };
      }
    | {
          type: TaskActionTypes.COMPLETE_TASK;
      }
    | {
          type: TaskActionTypes.CLEAR_STATE;
      }
    | {
          type: TaskActionTypes.REFLASH_TASK;
          payload: {
              workTime: number;
              shortBreakTime: number;
              longBreakTime: number;
          };
      };
