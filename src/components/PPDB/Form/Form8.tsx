// Type
import { FormPPDB } from '../../../Types/Index';

// Utils
import { receiver } from '../../../utils/Data';

// Component
import Input from '../../forms_items/Input';
import InputSelect from '../../forms_items/InputSelect';
import TextArea from '../../forms_items/TextArea';

const Form8: React.FC<FormPPDB> = () => {
  return (
    <div className="grid grid-cols-3 gap-[1.8em]">
      <Input type="number" name="no_kks" label="No KKS" placeholder="....." />
      <InputSelect
        name="receiver_kps"
        label="Penerima KPS"
        placeholder="......"
        options={receiver}
      />
      <Input type="number" name="no_kps" label="No KPS" placeholder="....." />
      <InputSelect
        name="receiver_kip"
        label="Penerima KIP"
        placeholder="......"
        options={receiver}
      />
      <Input name="name_kip" label="Nama Tertera di KIP" placeholder="....." />
      <Input type="number" name="no_kip" label="No KIP" placeholder="....." />
      <TextArea name="reason_kip" label="Keterangan" placeholder="......" />
    </div>
  );
};

export default Form8;
