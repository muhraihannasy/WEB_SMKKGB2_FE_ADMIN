import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Popover, Whisper } from 'rsuite';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { useModal } from '../../../context/ModalContext';
import { AiFillEye } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { IoInformationOutline } from 'react-icons/io5';
import { postData, updateData } from '../../../utils/ApiUtils';
import { toastError, toastSuccess } from '../../Toast';
import ROUTE from '../../../route';
import { Link } from 'react-router-dom';

export const Column_Registration_List_Admin_Pay = [
  {
    Header: 'Nama Lengkap',
    accessor: 'fullname',
  },
  {
    Header: 'Tipe Pembayaran',
    accessor: 'type_payment',
    Cell: ({ row }) => {
      const status_payment: any = {
        '1': (
          <p className="inline-flex rounded-full bg-meta-4 bg-opacity-10 px-3 py-1 text-sm font-medium text-bodydark2">
            Belum Diketahui
          </p>
        ),
        '2': (
          <p className="inline-flex rounded-full bg-meta-7 bg-opacity-10 px-3 py-1 text-sm font-medium text-meta-7">
            Pembayaran Ofline
          </p>
        ),
        '3': (
          <p className="inline-flex rounded-full bg-meta-5 bg-opacity-10 px-3 py-1 text-sm font-medium text-meta-5">
            Pembayaran Online
          </p>
        ),
      };

      return status_payment[row.original.type_payment];
    },
  },
  {
    Header: 'Status Pembayaran',
    accessor: 'type_registration',
    Cell: ({ row }) => {
      const status_payment: any = {
        '1': (
          <p className="inline-flex rounded-full bg-meta-4 bg-opacity-10 px-3 py-1 text-sm font-medium text-bodydark2">
            Belum Melakukan Pembayaran
          </p>
        ),
        '2': (
          <p className="inline-flex rounded-full bg-meta-6 bg-opacity-10 px-3 py-1 text-sm font-medium text-meta-6">
            Sedang Di Proses
          </p>
        ),
        '3': (
          <p className="inline-flex rounded-full bg-meta-3 bg-opacity-10 px-3 py-1 text-sm font-medium text-meta-3">
            Pembayaran Berhasil
          </p>
        ),
      };

      return status_payment[row.original.status_payment];
    },
  },

  {
    Header: 'Action',
    accessor: 'actions',
    Cell: ({ row }) => (
      <CustomComponent
        placement="bottomEnd"
        loading={false}
        children={'asd'}
        data={{
          ...row.original,
        }}
      />
    ),
  },
];

const DefaultPopover = React.forwardRef(({ content, data, ...props }, ref) => {
  const {
    closeModal,
    openModal,
    setCurrentModal,
    setModalData,
    setHasUpdatedRowData,
  } = useModal();

  function handleOpenModal(name: string) {
    setCurrentModal(name);
    setModalData({
      payment_proof: data.payment_proof,
      registration_id: data.id,
    });
    openModal();
  }

  async function handlePaymentSuccess() {
    const formValue = {
      registration_id: data.id,
    };

    try {
      const request = await updateData(
        '/admin/registration/change_status',
        formValue,
      );
      if (request.success) {
        toastSuccess('Berhasil Menyimpan Data');
        setHasUpdatedRowData(true);
        closeModal();
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  let renderActionPayment = null;
  switch (true) {
    case data.type_payment == '3' && data.status_payment == '2':
      renderActionPayment = (
        <>
          <button
            className="hover:bg-meta-5 hover:text-white flex items-center text-lg rounded-full w-[2em] h-[2em] p-1 bg-meta-2 flex items-center justify-center"
            type="button"
            onClick={() =>
              handleOpenModal('SHOW_MODAL_DETAIL_PAYMENT_REGISTRATION')
            }
          >
            <AiFillEye />
          </button>
          <button
            className="hover:text-white hover:bg-meta-3  flex items-center text-lg rounded-full w-[2em] h-[2em] p-1 bg-meta-2 flex items-center justify-center"
            type="button"
            onClick={handlePaymentSuccess}
          >
            <BsFillPersonCheckFill />
          </button>
        </>
      );
      break;
    case data.type_payment == '1' && data.status_payment == '1':
      renderActionPayment = (
        <>
          <button
            className="hover:text-primary flex items-center text-lg rounded-full w-[2em] h-[2em] p-1 bg-meta-2 flex items-center justify-center"
            type="button"
            onClick={() =>
              handleOpenModal('SHOW_MODAL_REEDEM_CODE_REGISTRATION')
            }
          >
            <FaMoneyCheckAlt />
          </button>
        </>
      );
      break;
    default:
      renderActionPayment = (
        <Link to={`${ROUTE.Administrator.Ppdb.detail_payment}/${data.uuid}`}>
          <button
            className="hover:text-primary flex items-center text-lg rounded-full w-[2em] h-[2em] p-1 bg-meta-2 flex items-center justify-center"
            type="button"
          >
            <IoInformationOutline />
          </button>
        </Link>
      );
      break;
  }

  return (
    <Popover ref={ref} {...props}>
      <div className="flex items-center justify-center gap-[1em] px-2">
        {renderActionPayment}
      </div>
    </Popover>
  );
});

const CustomComponent = ({ placement, loading, children, data }) => (
  <Whisper
    trigger="click"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      <DefaultPopover
        content={`I am positioned to the ${placement}`}
        data={data}
      />
    }
  >
    <button className="text-2xl flex items-center justify-center">
      <BiDotsHorizontalRounded />
    </button>
  </Whisper>
);
