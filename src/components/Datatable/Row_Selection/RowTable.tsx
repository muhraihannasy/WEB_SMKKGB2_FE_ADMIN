const RowTable = ({ row, columnIsNotSorted, onClickRow }) => {
  const CellBodyTable = ({ cell }) => {
    const isNotSelectedColumn = columnIsNotSorted.includes(cell.column.id)
      ? false
      : true;

    const handleOnClickCell = () => {
      if (isNotSelectedColumn == true && cell.column.Header !== '') {
        onClickRow(row.original);
      }
      return;
    };

    const style = {
      td: `${
        isNotSelectedColumn && 'cursor-pointer '
      } border-b border-[#eee] py-5 pl-4 dark:border-strokedark `,
    };

    return (
      <td
        onClick={handleOnClickCell}
        {...cell.getCellProps()}
        className={style.td}
      >
        {cell.render('Cell')}
      </td>
    );
  };

  const style = {
    trBody: 'border-b border-grey2',
  };

  return (
    <tr {...row.getRowProps()} className={style.trBody}>
      {row.cells.map((cell) => (
        <CellBodyTable cell={cell} />
      ))}
    </tr>
  );
};

export default RowTable;
