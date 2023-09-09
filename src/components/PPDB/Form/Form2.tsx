// Type
import { FormPPDB } from '../../../Types/Index';

// Utils
import { religion, gender, specialNeeds } from '../../../utils/Data';

// Component
import Input from '../../forms_items/Input';
import InputDate from '../../forms_items/InputDate';
import InputSelect from '../../forms_items/InputSelect';

const Form2: React.FC<FormPPDB> = () => {
  const style = {
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
    wrapperInputRTRW: 'flex items-center gap-3',
  };

  console.log('rerun');
  return (
    <div className={style.wrapperInput}>
      <Input type="number" name="nisn" label="NISN" placeholder="....." />
      <Input type="number" name="nik" label="NIK" placeholder="....." />
      <InputSelect
        name="religion"
        label="Agama"
        placeholder="......"
        options={religion}
      />
      <Input
        type="number"
        name="weight"
        label="Berat Badan"
        placeholder="....."
      />
      <Input
        type="number"
        name="height"
        label="Tinggi Badan"
        placeholder="....."
      />
      <InputSelect
        name="gender"
        label="Jenis Kelamin"
        placeholder="......"
        options={gender}
      />
      <InputSelect
        name="special_needs"
        label="Berkebutuhan Khusus"
        placeholder="......"
        options={specialNeeds}
      />
      <InputDate name="birth_date" label="Tanggal Lahir" />
      <Input name="birth_place" label="Tempat Lahir" placeholder="....." />
      <Input name="address" label="Alamat" placeholder="....." />
      <div className={style.wrapperInputRTRW}>
        <Input type="number" name="rt" label="RT" placeholder="....." />
        <Input type="number" name="rw" label="RW" placeholder="....." />
      </div>
      <Input name="kelurahan" label="Kelurahan" placeholder="....." />
      <Input name="kecamatan" label="Kecamatan" placeholder="....." />{' '}
      <Input name="kodepos" label="kodepos" placeholder="....." />
    </div>
  );
};

export default Form2;
