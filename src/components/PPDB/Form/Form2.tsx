// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import Input from '../../forms_items/Input';
import InputDate from '../../forms_items/InputDate';
import InputSelect from '../../forms_items/InputSelect';

const Form2: React.FC<FormPPDB> = ({ register }) => {
  const style = {
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10',
    wrapperInputRTRW: 'flex items-center gap-3',
  };
  return (
    <div className={style.wrapperInput}>
      <Input
        type="number"
        name="nisn"
        label="NISN"
        placeholder="....."
        register={register}
      />
      <Input
        type="number"
        name="nik"
        label="NIK"
        placeholder="....."
        register={register}
      />
      <InputSelect
        name="religion"
        label="Agama"
        placeholder="......"
        register={register}
      />
      <Input
        type="number"
        name="weight"
        label="Berat Badan"
        placeholder="....."
        register={register}
      />
      <Input
        type="number"
        name="height"
        label="Tinggi Badan"
        placeholder="....."
        register={register}
      />
      <InputSelect
        name="gender"
        label="Jenis Kelamin"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="special_needs"
        label="Berkebutuhan Khusus"
        placeholder="......"
        register={register}
      />
      <InputDate name="birth_date" label="Tanggal Lahir" register={register} />
      <Input
        name="birth_place"
        label="Tempat Lahir"
        placeholder="....."
        register={register}
      />
      <Input
        name="address_description"
        label="Alamat"
        placeholder="....."
        register={register}
      />
      <div className={style.wrapperInputRTRW}>
        <Input
          type="number"
          name="rt"
          label="RT"
          placeholder="....."
          register={register}
        />
        <Input
          type="number"
          name="rw"
          label="RW"
          placeholder="....."
          register={register}
        />
      </div>
      <Input
        name="kelurahan"
        label="Kelurahan"
        placeholder="....."
        register={register}
      />
      <Input
        name="kecamatan"
        label="Kecamatan"
        placeholder="....."
        register={register}
      />{' '}
      <Input
        name="kodepos"
        label="kodepos"
        placeholder="....."
        register={register}
      />
    </div>
  );
};

export default Form2;
