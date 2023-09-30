import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Popover, Whisper } from 'rsuite';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { useModal } from '../../../context/ModalContext';

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
      <CustomComponent placement="bottomEnd" loading={false} children={'asd'} />
    ),
  },
];

const DefaultPopover = React.forwardRef(({ content, ...props }, ref) => {
  const { openModal } = useModal();

  return (
    <Popover ref={ref} {...props}>
      <div className="flex items-center justify-center gap-[1em] px-2">
        <button
          className="hover:text-primary flex items-center text-lg rounded-full w-[2em] h-[2em] p-1 bg-meta-2 flex items-center justify-center"
          type="button"
          onClick={openModal}
        >
          <FaMoneyCheckAlt />
        </button>

        <button className="hover:text-primary" type="button">
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
              fill=""
            />
            <path
              d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
              fill=""
            />
          </svg>
        </button>
      </div>
    </Popover>
  );
});

const CustomComponent = ({ placement, loading, children }) => (
  <Whisper
    trigger="click"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={<DefaultPopover content={`I am positioned to the ${placement}`} />}
  >
    <button className="text-2xl flex items-center justify-center">
      <BiDotsHorizontalRounded />
    </button>
  </Whisper>
);
