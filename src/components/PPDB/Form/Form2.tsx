// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import Input from '../../forms_items/Input';
import InputDate from '../../forms_items/InputDate';
import InputSelect from '../../forms_items/InputSelect';

const Form2: React.FC<FormPPDB> = ({ register }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
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
      <InputSelect
        name="competency_1"
        label="Pillihan Kompetensi 1"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="competency_2"
        label="Pillihan Kompetensi 2"
        placeholder="......"
        register={register}
      />
      <InputSelect
        name="competency_3"
        label="Pillihan Kompetensi 3"
        placeholder="......"
        register={register}
      />
      <Input
        name="email"
        label="Email"
        placeholder="......"
        register={register}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="......"
        register={register}
      />
    </div>
  );
};

export default Form2;
