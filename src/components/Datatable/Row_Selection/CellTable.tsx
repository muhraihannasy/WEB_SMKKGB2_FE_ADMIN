import React, { useEffect } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';

// Icon
import { IconSort } from '../../../icons/IconSVG';

// Component
import CheckboxTable from '../../Checkbox/CheckboxTable';
import RowTable from './RowTable';
import useListener from '../../../Hooks/useListener';

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
    useSortBy,
    useRowSelect,
    useCustomTable,
  );

  const [dispatch] = useListener(onChangeSelection);
  useEffect(() => {
    dispatch(selectedFlatRows);
  }, [selectedRowIds, dispatch]);

  const style = {
    table: 'w-full max-[1200px]:w-[1000px] ',
    trHeader: `${table} sticky top-0 text-white border-b border-grey2`,
    thWrapper: `flex items-center justify-between mr-4 py-4 font-semibold`,
  };

  return (
    <div className={`scrollbar-x ${data.length == 0 ? '' : 'h-[30em]'}`}>
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
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`${column.id == 'selection' && 'w-[2em]'}`}
                  >
                    <div
                      className={`column-${columnHeader} ${style.thWrapper}`}
                    >
                      <span>{column.render('Header')}</span>

                      {column.disableSortBy ||
                      column.id == 'selection' ? null : (
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <span>
                                <IconSort />
                              </span>
                            ) : (
                              <span>
                                <IconSort />
                              </span>
                            )
                          ) : (
                            <span>
                              <IconSort />
                            </span>
                          )}
                        </span>
                      )}
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
  );
};

export default React.memo(DatatableRowSelection);
