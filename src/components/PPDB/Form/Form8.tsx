// Type
import { FormPPDB } from '../../../Types/Index';

// Component
import Input from '../../forms_items/Input';
import InputSelect from '../../forms_items/InputSelect';
import TextArea from '../../forms_items/TextArea';

const Form8: React.FC<FormPPDB> = ({ register }) => {
  return (
    <div className="grid grid-cols-3 gap-[1.8em]">
      <Input
        type="number"
        name="no_kks"
        label="No KKS"
        placeholder="....."
        register={register}
      />
      <InputSelect
        name="receiver_kps"
        label="Penerima KPS"
        placeholder="......"
        register={register}
      />
      <Input
        type="number"
        name="no_kps"
        label="No KPS"
        placeholder="....."
        register={register}
      />
      <InputSelect
        name="receiver_kip"
        label="Penerima KIP"
        placeholder="......"
        register={register}
      />
      <Input
        name="kip_name"
        label="Nama Tertera di KIP"
        placeholder="....."
        register={register}
      />
      <Input
        type="number"
        name="no_kip"
        label="No KIP"
        placeholder="....."
        register={register}
      />
      <TextArea
        name="reason_kip"
        label="Keterangan"
        placeholder="......"
        register={register}
      />
    </div>
  );
};

export default Form8;
