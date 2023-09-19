import React, { useEffect } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';

// Icon

// Component
import CheckboxTable from '../../Checkbox/CheckboxTable';
import RowTable from './RowTable';
import useListener from '../../../hooks/useListener';
const DatatableRowSelection = ({
  data = [],
  columns,
  table,
  onChangeSelection,
  columnIsNotSorted,
  columnIsNotHaveIcon,
  useCustomTable,
  onClickRow,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: { selectedRowIds: {} },
    },
    useRowSelect,
    useCustomTable,
  );

  const [dispatch] = useListener(onChangeSelection);
  useEffect(() => {
    dispatch(selectedFlatRows);
  }, [selectedRowIds, dispatch]);

  const style = {
    table: 'w-full table-auto',
    trHeader: `${table} bg-gray-2 text-left dark:bg-meta-4`,
    thWrapper: `flex items-center justify-between mr-4 py-4 font-semibold`,
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className={`max-w-full overflow-x-auto`}>
        <table {...getTableProps()} className={style.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={style.trHeader}
              >
                {headerGroup.headers.map((column) => {
                  const columnHeader =
                    typeof column.Header == 'string'
                      ? column.Header.replace(/\s+/g, '-').toLowerCase()
                      : '';

                  return (
                    <th
                      {...column.getHeaderProps()}
                      className={`${
                        column.id == 'selection' && 'w-[2em]'
                      } min-w-[20px] py-4 pl-4 font-medium text-black dark:text-white`}
                    >
                      <div className={`column-${columnHeader} `}>
                        <span className="whitespace-nowrap">
                          {column.render('Header')}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <RowTable
                  row={row}
                  columnIsNotSorted={columnIsNotSorted}
                  onClickRow={onClickRow}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(DatatableRowSelection);
