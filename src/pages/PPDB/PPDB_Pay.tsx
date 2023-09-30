import { useEffect, useMemo, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

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
import { useLoading } from '../../hooks/useLoading';
import { updateData } from '../../utils/ApiUtils';
import { toastError, toastSuccess } from '../../components/Toast';

const PPDB_Pay = () => {
  const {
    data: RegistrationsList,
    refecth,
    error,
    isLoading,
  } = useFecth('admin/registration/list_pay');

  const {
    isModalOpen,
    closeModal,
    currentModal,
    modalData,
    hasUpdatedRowData,
  } = useModal();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const form = useForm();
  const { handleSubmit, reset } = form;

  const column = useMemo(() => Column_Registration_List_Admin_Pay, []);

  const data = useMemo(
    () => RegistrationsList?.data,
    [RegistrationsList?.data],
  );

  function handleCloseModal() {
    closeModal();
    reset({ code: '' });
  }

  async function handleReedemCodeRegistration(formValue: any) {
    const newFormValue = {
      ...formValue,
      registration_id: modalData.registration_id,
    };
    setLoading(true);

    try {
      const request = await updateData(
        '/admin/registration/code_redeem',
        newFormValue,
      );
      if (request.success) {
        setLoading(false);
        toastSuccess('Berhasil Veritifikasi Kode');
        closeModal();
        refecth();
      }
    } catch (error: any) {
      setLoading(false);
      if (error.response.data.message.errors.code) {
        toastError(error.response.data.message.errors.code);
      }
    }
  }

  function renderModalChildren() {
    if (currentModal == 'SHOW_MODAL_REEDEM_CODE_REGISTRATION') {
      return (
        <>
          <Modal.Header>
            <Modal.Title>Masukan Code Registrasi</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormProvider {...form}>
              <Input type="text" name="code" placeholder="Code Registration" />
            </FormProvider>
          </Modal.Body>
          <Modal.Footer>
            <div className="flex items-center gap-2 justify-end">
              <Button onClick={handleCloseModal} bg="disabled" size="xs">
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit(handleReedemCodeRegistration)}
                bg="tertiary"
                size="xs"
              >
                Ok
              </Button>
            </div>
          </Modal.Footer>
        </>
      );
    }

    return (
      <>
        <Modal.Header>
          <Modal.Title>Bukti Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex items-center justify-center">
            <PhotoProvider>
              <PhotoView src={modalData?.payment_proof}>
                <img src={modalData?.payment_proof} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>
        </Modal.Body>
      </>
    );
  }

  useEffect(() => {
    if (hasUpdatedRowData) {
      refecth();
    }
  }, [hasUpdatedRowData]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Daftar Pembayaran Registrasi" />

      <Modal size="xs" open={isModalOpen} onClose={handleCloseModal}>
        {renderModalChildren()}
      </Modal>

      {RegistrationsList?.data && (
        <DatatableRowSelection
          table="table-job-candidate"
          data={data}
          columns={column}
          columnIsNotSorted={['selection']}
          useCustomTable={useSelection}
          onClickRow={() => {}}
          onChangeSelection={(value) => {}}
        />
      )}
    </DefaultLayout>
  );
};

export default PPDB_Pay;
