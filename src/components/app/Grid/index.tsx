import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { TaskService } from '../../../services/api/task.service';
import GridHeader from './components/GridHeader';
import { GridProps } from './types';

const Grid: React.FC<GridProps> = (props) => {
  const {
    header,
    columns: prop_columns,
    search_placeholder = 'Search...',
  } = props;

  const [tableData, setTableData] = useState<Record<string, any>[]>([]);

  const columns = useMemo(() => {
    return prop_columns;
  }, [prop_columns]);

  const fetchData = useCallback(async () => {
    const tasks = await TaskService.filter();
    return tasks;
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setTableData(data);
    })();
  }, [fetchData]);

  const tableInstance = useTable({ columns, data: tableData });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="bg-slate-200 flex flex-col w-full p-4">
      <GridHeader {...header} />

      <div className="bg-white p-8">
        <div className="flex justify-between items-center pb-4">
          <p>Results: {tableData.length}</p>

          <div className="flex items-center">
            <input
              placeholder={search_placeholder}
              className="border border-1 border-gray-200 p-2"
            />

            <div className="ml-24">{/* <button>Export</button> */}</div>
          </div>
        </div>

        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="border-y-2 border-gray-200 tracking-widest py-2 px-4 text-left"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, row_index) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={row_index % 2 ? '' : 'bg-gray-100'}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="p-4">
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grid;
