import { IAccount } from "./account.model"

export interface ITask {
  id: string,
  task_id: string,
  case: string,
  subject: string,
  owners: IAccount[],
  followers: IAccount[],
  due_date: string
  status: string
}