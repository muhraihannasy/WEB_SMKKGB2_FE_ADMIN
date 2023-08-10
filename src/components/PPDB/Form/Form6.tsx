// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import Input from '../../forms_items/Input';
import InputDate from '../../forms_items/InputDate';
import InputSelect from '../../forms_items/InputSelect';

const Form6: React.FC<FormPPDB> = ({ register }) => {
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
        register={register}
      />
      <Input
        name="no_exam"
        label="No Perseta Ujian"
        placeholder="....."
        register={register}
      />
      <Input
        name="no_serial_diploma"
        label="No. Seri Ijazah"
        placeholder="....."
        register={register}
      />
      <Input
        name="no_skhus"
        label="No. SKHUS"
        placeholder="....."
        register={register}
      />
      <InputSelect
        name="extracuriculler_1"
        label="Ekstrakurikuler 1"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="extracuriculler_2"
        label="Ekstrakurikuler 2"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="uniform_1"
        label="Baju Olahraga"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="uniform_2"
        label="Baju Wear Pack (Khusus Jurusan TKJ)"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="uniform_3"
        label="Baju Kotak-Kotak"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="uniform_4"
        label="Jas Almamater"
        placeholder="......"
        register={register}
      />
    </div>
  );
};

export default Form6;
