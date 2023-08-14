// Type
import { FormPPDB } from '../../../Types/Index';

// Utils
import { competency } from '../../../utils/Data';

// Component
import Input from '../../forms_items/Input';
import InputSelect from '../../forms_items/InputSelect';

const Form1Admin: React.FC<FormPPDB> = ({ register }) => {
  return (
    <div className="grid grid-cols-3 gap-[1.8em]">
      <Input name="fullname" label="Nama Lengkap" placeholder="....." />
      <Input name="from_school" label="Asal Sekolah" placeholder="....." />
      <Input name="phone" label="No Telepon" placeholder="....." />
      <InputSelect
        name="competency_pick_1"
        label="Pillihan Kompetensi 1"
        placeholder="......"
        options={competency}
      />
      <InputSelect
        name="competency_pick_2"
        label="Pillihan Kompetensi 2"
        placeholder="......"
        options={competency}
      />
      <InputSelect
        name="competency_pick_3"
        label="Pillihan Kompetensi 3"
        placeholder="......"
        options={competency}
      />
      <Input name="email" label="Email" placeholder="......" />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="......"
      />
    </div>
  );
};

export default Form1Admin;
