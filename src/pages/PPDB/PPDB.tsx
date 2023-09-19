import { useMemo } from 'react';

// Icon
import { FiUserPlus } from 'react-icons/fi';
import { RiFileExcel2Fill } from 'react-icons/ri';

// Layout
import DefaultLayout from '../../layout/DefaultLayout';

// Component
import Breadcrumb from '../../components/Breadcrumb';

// Images

import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import ROUTE from '../../route';
import useFecth from '../../hooks/useFecth';
import DatatableRowSelection from '../../components/Datatable/Row_Selection/DatatableRowSelection';
import useSelection from '../../hooks/useSelection';
import { Column_Registration_List_Admin } from '../../components/Column-Table/PPDB/ColumnRegistrationListAdmin';

const PPDB = () => {
  const {
    data: RegistrationsList,
    error,
    isLoading,
  } = useFecth('admin/registration');

  const navigate = useNavigate();

  // Navigate
  const NavigateToAddSiswa = () => navigate(ROUTE.Administrator.Ppdb.add);
  const column = useMemo(() => Column_Registration_List_Admin, []);

  const handleExportExcel = () => {};
  console.log(RegistrationsList);

  const data = useMemo(
    () => RegistrationsList?.data,
    [RegistrationsList?.data],
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Peneriman Siswa Baru" />

      <div className="flex-column mb-4 flex items-end justify-end gap-4">
        <Button bg="secondary" size="sm" onClick={handleExportExcel}>
          <RiFileExcel2Fill className="text-[1.2em]" />
          Export Excel
        </Button>
        <Button bg="tertiary" size="sm" onClick={NavigateToAddSiswa}>
          <FiUserPlus className="text-[1.2em]" />
          Tambah Siswa
        </Button>
      </div>

      {RegistrationsList?.data && (
        <DatatableRowSelection
          table="table-job-candidate"
          data={data}
          columns={column}
          columnIsNotSorted={['selection']}
          useCustomTable={useSelection}
          onChangeSelection={(value) => console.log(value)}
        />
      )}
    </DefaultLayout>
  );
};

export default PPDB;
