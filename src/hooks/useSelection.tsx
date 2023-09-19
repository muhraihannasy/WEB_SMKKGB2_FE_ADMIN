import CheckboxTable from '../components/Checkbox/CheckboxTable';

const useSelection = (hooks) => {
  hooks.visibleColumns.push((columns) => [
    {
      id: 'selection',
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <div className="flex items-center gap-[0.625em]">
          <CheckboxTable {...getToggleAllRowsSelectedProps()} />
        </div>
      ),
      Cell: ({ row }) => (
        <div className="flex gap-[0.625em] text-grey py-6">
          <CheckboxTable {...row.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    ...columns,
  ]);
};

export default useSelection;
