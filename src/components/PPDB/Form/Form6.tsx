// Type
import { FormPPDB } from '../../../Types/Index';

// Utils
import {
  uniform,
  extracurriculer,
  typeRegistration,
} from '../../../utils/Data';

// Component
import Input from '../../forms_items/Input';
import InputSelect from '../../forms_items/InputSelect';

const Form6: React.FC<FormPPDB> = () => {
  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
  };

  return (
    <div className={style.wrapperInput}>
      <InputSelect
        name="type_registration"
        label="Jenis Pendaftaran"
        placeholder="......"
        options={typeRegistration}
      />
      <Input name="no_examinee" label="No Perseta Ujian" placeholder="....." />
      <Input
        name="no_serial_diploma"
        label="No. Seri Ijazah"
        placeholder="....."
      />
      <Input name="no_serial_skhus" label="No. SKHUS" placeholder="....." />
      <InputSelect
        name="extracurricular_1"
        label="Ekstrakurikuler 1"
        placeholder="......"
        options={extracurriculer}
      />
      <InputSelect
        name="extracurricular_2"
        label="Ekstrakurikuler 2"
        placeholder="......"
        options={extracurriculer}
      />
      <InputSelect
        name="uniform_1"
        label="Baju Olahraga"
        placeholder="......"
        options={uniform}
      />
      <InputSelect
        name="uniform_2"
        label="Baju Wear Pack (Khusus Jurusan TKJ)"
        placeholder="......"
        options={uniform}
      />
      <InputSelect
        name="uniform_3"
        label="Baju Kotak-Kotak"
        placeholder="......"
        options={uniform}
      />
      <InputSelect
        name="uniform_4"
        label="Jas Almamater"
        placeholder="......"
        options={uniform}
      />
    </div>
  );
};

export default Form6;
