import { Grid } from '../../components/app';
import { ITask } from '../../models/task.model';
import React from 'react';

interface TasksPageProps {}

const TasksPage: React.FC<TasksPageProps> = (props) => {
  return (
    <div>
      <Grid
        header={{
          title: 'Tasks',
        }}
        columns={[
          {
            Header: 'TASK ID',
            accessor: 'task_id',
          },
          {
            Header: 'CASE',
            accessor: 'case',
          },
          {
            Header: 'SUBJECT',
            accessor: 'subject',
          },
          {
            Header: 'STATUS',
            accessor: 'status',
          },
          {
            Header: 'OWNER(S)',
            accessor: 'owners',
            Cell: (cell) => {
              const { row } = cell;
              const { owners } = row.original as ITask;
              return (
                <div className="flex flex-col">
                  {owners.map((item, index) => {
                    return <span key={index}>{item?.email_address}</span>;
                  })}
                </div>
              );
            },
          },
          {
            Header: 'FOLLOWER(S)',
            accessor: 'followers',
            Cell: (cell) => {
              const { row } = cell;
              const { followers } = row.original as ITask;
              return (
                <div className="flex flex-col">
                  {followers.map((item, index) => {
                    return <span key={index}>{item?.email_address}</span>;
                  })}
                </div>
              );
            },
          },
          {
            Header: 'DUE DATE',
            accessor: 'due_date',
          },
          {
            Header: '',
            accessor: 'actions',
          },
        ]}
      />
    </div>
  );
};

export default TasksPage;
