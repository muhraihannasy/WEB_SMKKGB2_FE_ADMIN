import { useMemo, useState } from 'react';

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
import { Column_Registration_List_Admin_Pay } from '../../components/Column-Table/PPDB/ColumnRegistrationListAdminPay';
import { Modal } from 'rsuite';
import { useModal } from '../../context/ModalContext';
import Input from '../../components/forms_items/Input';
import { FormProvider, useForm } from 'react-hook-form';

const PPDB_Pay = () => {
  const {
    data: RegistrationsList,
    error,
    isLoading,
  } = useFecth('admin/registration/list_pay');

  const { isModalOpen, closeModal } = useModal();
  const navigate = useNavigate();

  const form = useForm();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  // Navigate
  const NavigateToAddSiswa = () => navigate(ROUTE.Administrator.Ppdb.add);
  const column = useMemo(() => Column_Registration_List_Admin_Pay, []);

  function handleOnSubmit(formValue) {
    console.log(formValue);
  }

  const data = useMemo(
    () => RegistrationsList?.data,
    [RegistrationsList?.data],
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Daftar Pembayaran Registrasi" />

      <Modal size="xs" open={isModalOpen} onClose={closeModal}>
        <Modal.Header>
          <Modal.Title>Masukan Code Registrasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProvider {...form}>
            <Input type="text" name="email" placeholder="Code Registration" />
          </FormProvider>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center gap-2 justify-end">
            <Button onClick={closeModal} bg="disabled" size="xs">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit(handleOnSubmit)}
              bg="tertiary"
              size="xs"
            >
              Ok
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {RegistrationsList?.data && (
        <DatatableRowSelection
          table="table-job-candidate"
          data={data}
          columns={column}
          columnIsNotSorted={['selection']}
          useCustomTable={useSelection}
          onClickRow={() => {}}
          onChangeSelection={(value) => console.log(value)}
        />
      )}
    </DefaultLayout>
  );
};

export default PPDB_Pay;
