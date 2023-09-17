import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toastError } from '../Toast';
import { postData } from '../../utils/ApiUtils';
import axios from 'axios';
import { getToken } from '../../helpers';
import environment from '../../environment';

const typeAllowFiles = ['image/jpg', 'image/jpeg', 'image/png'];

const InputFile = ({ label, name, folder, imageUploads, setImageUploads }) => {
  const [errorTypeFile, setErrorTypeFile] = useState();

  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const error = errors && errors[name] ? true : false;

  async function HandleUploadFile(e) {
    const files = e.target.files[0];
    const typeFile = files.type;
    const image_old_temporary = watch(name);

    let imageOld =
      image_old_temporary !== undefined ? image_old_temporary?.split('/') : '';
    imageOld = imageOld[imageOld.length - 1];

    if (!typeAllowFiles.includes(typeFile)) {
      toastError('Tipe File Harus PNG, JPG, atau JPEG');
      return;
    }

    const formdata = new FormData();
    formdata.append('image', files, files.name);
    formdata.append('folder', folder);
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
      setValue(name, request.data.url);
    } catch (error: any) {
      console.log(error);
    }
  }

  const image = watch(name);

  const style = {
    input: `
    w-full cursor-pointer rounded-lg border-[1.5px] bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid  file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter
          ${
            error
              ? 'border-danger file:border-danger'
              : ' border-stroke focus:border-primary active:border-primary file:border-stroke'
          }`,
  };

  return (
    <div>
      <div className="preview w-[9em] h-[9em] rounded-md overflow-hidden mb-4 bg-meta-2 flex items-center justify-center">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <label className="mb-3 block text-black dark:text-white">{label}</label>
        <input
          type="file"
          className={style.input}
          onChange={HandleUploadFile}
        />
      </div>
      <span
        className={`block text-danger transition-all
        ${error ? 'visible opacity-100 mt-2' : 'invisible opacity-0'}
        `}
      >
        {error && errors[name]?.message}
      </span>
    </div>
  );
};

export default InputFile;
