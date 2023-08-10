// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import Input from '../../forms_items/Input';
import InputDate from '../../forms_items/InputDate';
import InputSelect from '../../forms_items/InputSelect';

const Form3: React.FC<FormPPDB> = ({ register }) => {
  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
  };

  return (
    <>
      <div>
        {/* Father Form  */}
        <h2 className={style.titleForm}>Data Ayah Kandung</h2>
        <div className={style.wrapperInput}>
          <Input
            name="father_name"
            label="Nama Ayah Kandung"
            placeholder="....."
            register={register}
          />
          <Input
            type="number"
            name="nik"
            label="NIK Ayah"
            placeholder="....."
            register={register}
          />
          <InputDate
            name="father_birth_date"
            label="Tanggal Lahir"
            register={register}
          />
          <Input
            name="father_birth_place"
            label="Tempat Lahir"
            placeholder="....."
            register={register}
          />
          <InputSelect
            name="father_education"
            label="Pendidikan"
            placeholder="......"
            register={register}
          />
          <InputSelect
            name="father_job"
            label="Pekerjaan"
            placeholder="......"
            register={register}
          />
          <InputSelect
            name="father_income"
            label="Penghasilan Bulanan"
            placeholder="......"
            register={register}
          />
        </div>

        {/* Mother Form  */}
        <h2 className={style.titleForm}>Data Ibu Kandung</h2>
        <div className={style.wrapperInput}>
          <Input
            name="mother_name"
            label="Nama Ibu Kandung"
            placeholder="....."
            register={register}
          />
          <Input
            type="number"
            name="nik"
            label="NIK Ibu"
            placeholder="....."
            register={register}
          />
          <InputDate
            name="mother_birth_date"
            label="Tanggal Lahir"
            register={register}
          />
          <Input
            name="mother_birth_place"
            label="Tempat Lahir"
            placeholder="....."
            register={register}
          />
          <InputSelect
            name="mother_education"
            label="Pendidikan"
            placeholder="......"
            register={register}
          />
          <InputSelect
            name="mother_job"
            label="Pekerjaan"
            placeholder="......"
            register={register}
          />
          <InputSelect
            name="mother_income"
            label="Penghasilan Bulanan"
            placeholder="......"
            register={register}
          />
        </div>
      </div>
    </>
  );
};

export default Form3;
