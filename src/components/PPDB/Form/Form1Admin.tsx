// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import Input from '../../forms_items/Input';
import InputSelect from '../../forms_items/InputSelect';

const Form1Admin: React.FC<FormPPDB> = ({ register }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Input
        name="fullname"
        label="Nama Lengkap"
        placeholder="....."
        register={register}
      />
      <Input
        name="from_school"
        label="Asal Sekolah"
        placeholder="....."
        register={register}
      />
      <Input
        name="Phone"
        label="No Telepon"
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

export default Form1Admin;
