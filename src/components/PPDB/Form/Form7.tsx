// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import InputFile from '../../forms_items/InputFile';

const Form7: React.FC<FormPPDB> = () => {
  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
  };

  return (
    <div className={style.wrapperInput}>
      <InputFile label="" field="" imageUploads="" setImageUploads="" />
      <InputFile label="" field="" imageUploads="" setImageUploads="" />
      <InputFile label="" field="" imageUploads="" setImageUploads="" />
      <InputFile label="" field="" imageUploads="" setImageUploads="" />
      <InputFile label="" field="" imageUploads="" setImageUploads="" />
    </div>
  );
};

export default Form7;
