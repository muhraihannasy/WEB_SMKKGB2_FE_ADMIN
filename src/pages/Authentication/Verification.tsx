import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { BsFillCloudUploadFill, BsCheckLg } from 'react-icons/bs';
import { toastError, toastSuccess } from '../../components/Toast';
import environment from '../../environment';
import { getToken } from '../../helpers';
import axios from 'axios';
import { useUserContext } from '../../context/UserContext';
import { postData } from '../../utils/ApiUtils';
import ROUTE from '../../route';
import SpinnerLoading from '../../components/SpinnerLoading';
import Spinner from '../../components/Spinner';

const typeAllowFiles = ['image/jpg', 'image/jpeg', 'image/png'];

const Verification = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [alreadyUpload, setAlreadyUpload] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState('');
  const [fileName, setFileName] = useState(null);

  const navigate = useNavigate();
  const { registration_id } = useParams();

  const code_registration = localStorage.getItem('registration_code');
  const payment_mode = searchParams.get('payment');

  function handleChangeTab(mode: string) {
    const mode_payment: any = {
      payment_ofline: 'ofline',
      payment_online: 'online',
    };

    setSearchParams({ payment: mode_payment[mode] });
  }

  async function handleUploadProofTransfer(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files[0];
    const typeFile = file.type;

    if (!typeAllowFiles.includes(typeFile)) {
      toastError('Tipe File Harus PNG, JPG, atau JPEG');
      return;
    }

    setAlreadyUpload(false);
    setIsUploading(true);

    const image_old_temporary = fileUploaded;
    let imageOld =
      image_old_temporary !== undefined ? image_old_temporary?.split('/') : '';
    imageOld = imageOld[imageOld.length - 1];

    const formdata = new FormData();
    formdata.append('image', file, file.name);
    formdata.append('folder', 'payment_registration');
    formdata.append('image_old', imageOld);

    let config = {
      method: 'POST',
      url: `${environment.apiUrl}/berkas/upload`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getToken()}`,
      },
      data: formdata,
    };

    try {
      const request = await axios(config);
      setFileUploaded(request.data.url);
      setAlreadyUpload(true);
      setFileName(file.name);
      setIsUploading(false);
    } catch (error: any) {
      console.log(error);
      setIsUploading(false);
    }
  }

  async function handlePaymentOnline() {
    const formValue = {
      registration_id,
      file: fileUploaded,
    };

    setLoading(true);

    try {
      const request = await postData(
        '/candidate/registration/update/proof_payment',
        formValue,
      );

      console.log(request, 'REQUEST');

      setLoading(false);

      if (request.success) {
        toastSuccess('Berhasil Mengupload Bukti Pembayaran');

        navigate(
          `${ROUTE.Auth.payment_success}/${request.data.payment_registration_id}`,
        );
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  }

  const PaymentOfline = () => {
    return (
      <div className=" max-[538px]:px-[1.5em] py-[3em] text-center">
        <h2 className="text-[1.4em] font-semibold">Verifitifikasi Kode</h2>
        <p className="max-[538px]:w-full mt-2 mb-4 w-[20em] mx-auto">
          Tunjukan Code ini ke TU Gedung A atau Gedung B SMK Karya Guna Bhakti 2
          Kota Bekasi
        </p>

        <h2 className="bg-gray rounded-md py-[0.8em]  max-[538px]:px-[1em] px-[3em] font-semibold text-3xl max-[538px]:w-full w-max mx-auto">
          {code_registration}
        </h2>
      </div>
    );
  };

  const PaymentOnline = () => {
    return (
      <div className="w-full  pt-[1em] self-start">
        <p className="max-[538px]:w-full mb-4 w-[20em]">
          Untuk Pembayaran secara online kamu dapat tranfers uang ke no rekening
          dibawah ini :
        </p>
        <div className="flex gap-1 flex-wrap">
          <p>
            <b>BCA : 0102830851234</b>
          </p>
          <p>(Rp. 150.000)</p>
        </div>

        <div className="w-full   mt-4 flex items-center  gap-2">
          <div className="flex-1 h-[3em] bg-stroke rounded-xl flex items-center pl-4 relative">
            <input
              type="file"
              className="absolute left-0 w-full h-full bg-meta-2 opacity-0"
              onChange={handleUploadProofTransfer}
            />
            <BsFillCloudUploadFill className="" />
            <p className="text-sm ml-2">
              {fileName == null ? 'Upload Bukti Tranfer...' : fileName}
            </p>
          </div>
          <div>
            {isUploading && <Spinner />}
            {alreadyUpload == true && (
              <div className=" w-[1.8em] h-[1.8em] rounded-full bg-white border text-meta-3 flex items-center justify-center text-xl">
                <BsCheckLg />
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handlePaymentOnline}
          className={`w-full mt-6 py-3 flex items-center justify-center rounded-xl font-semibold ${
            alreadyUpload ? 'bg-meta-3 text-white' : 'bg-meta-2'
          }`}
        >
          {loading ? <SpinnerLoading /> : 'Kirim'}
        </button>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center h-[100vh] px-[1.5em]">
      <div className="bg-white w-full max-w-[450px] flex flex-col p-6 rounded-xl">
        <h2 className="mb-4 text-lg font-semibold self-start">
          Pilih Metode Pembayaran
        </h2>
        <div className="w-full grid grid-cols-2 gap-4">
          <button
            className={`bg-white p-4 rounded-xl border transition-all ${
              payment_mode == 'ofline'
                ? 'border-graydark font-medium'
                : 'border-stroke'
            }`}
            onClick={() => handleChangeTab('payment_ofline')}
          >
            Ofline
          </button>
          <button
            className={`bg-white p-4 rounded-xl border transition-all ${
              payment_mode == 'online'
                ? 'border-graydark font-medium'
                : 'border-stroke'
            }`}
            onClick={() => handleChangeTab('payment_online')}
          >
            Online
          </button>
        </div>

        {payment_mode == 'ofline' && <PaymentOfline />}
        {payment_mode == 'online' && <PaymentOnline />}
      </div>
    </section>
  );
};

export default Verification;
