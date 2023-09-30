import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsFillCloudUploadFill, BsCheckLg } from 'react-icons/bs';

const PaymentSuccess = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] px-[1.5em]">
      <div className="bg-white w-full max-w-[450px] flex flex-col p-6 rounded-xl">
        <h2 className="mb-4 text-lg font-semibold self-start">
          Menunggu Konfirmasi Admin
        </h2>
      </div>
    </section>
  );
};

export default PaymentSuccess;
