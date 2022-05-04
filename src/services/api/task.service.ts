import { ITask } from "../../models/task.model";
import { data } from "../../services/mock_data/task.mock"

export const TaskService = {
  filter: async (): Promise<ITask[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 1000);
    })
  }
}