// Type
import { FormPPDB } from '../../../Types/Index';

// Utils
import { education, income, profession } from '../../../utils/Data';

// Component
import Input from '../../forms_items/Input';
import InputDate from '../../forms_items/InputDate';
import InputSelect from '../../forms_items/InputSelect';

const Form3: React.FC<FormPPDB> = () => {
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
          />
          <Input
            type="number"
            name="father_nik"
            label="NIK Ayah"
            placeholder="....."
          />
          <InputDate name="father_birth_date" label="Tanggal Lahir" />
          <Input
            name="father_birth_place"
            label="Tempat Lahir"
            placeholder="....."
          />
          <InputSelect
            name="father_education"
            label="Pendidikan"
            placeholder="......"
            options={education}
          />
          <InputSelect
            name="father_job"
            label="Pekerjaan"
            placeholder="......"
            options={profession}
          />
          <InputSelect
            name="father_income"
            label="Penghasilan Bulanan"
            placeholder="......"
            options={income}
          />
        </div>

        {/* Mother Form  */}
        <h2 className={style.titleForm}>Data Ibu Kandung</h2>
        <div className={style.wrapperInput}>
          <Input
            name="mother_name"
            label="Nama Ibu Kandung"
            placeholder="....."
          />
          <Input
            type="number"
            name="mother_nik"
            label="NIK Ibu"
            placeholder="....."
          />
          <InputDate name="mother_birth_date" label="Tanggal Lahir" />
          <Input
            name="mother_birth_place"
            label="Tempat Lahir"
            placeholder="....."
          />
          <InputSelect
            name="mother_education"
            label="Pendidikan"
            placeholder="......"
            options={education}
          />
          <InputSelect
            name="mother_job"
            label="Pekerjaan"
            placeholder="......"
            options={profession}
          />
          <InputSelect
            name="mother_income"
            label="Penghasilan Bulanan"
            placeholder="......"
            options={income}
          />
        </div>
      </div>
    </>
  );
};

export default Form3;
