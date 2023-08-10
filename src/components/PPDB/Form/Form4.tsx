// Icon
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

// Utils
import { uuidv4 } from '../../../utils/Helper';

// Type
import Button from '../../Button';

// Component
import InputSelect from '../../forms_items/InputSelect';
import TextArea from '../../forms_items/TextArea';

import { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';

interface FormPPDB {
  register: any;
  getValue: any;
  setValue: any;
  control: any;
}

const Form4: React.FC<FormPPDB> = ({
  register,
  control,
  getValue,
  setValue,
}) => {
  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'scholarships',
  });

  const handleAddScholarship = () => {
    const scholarship = {
      id: uuidv4(),
      type_scholarship: '',
      year_start: '',
      year_finish: '',
      description: '',
    };

    append(scholarship);
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id} className="mb-[2em]">
          <div className={style.wrapperInput}>
            <InputSelect
              name={`scholarships[${index}].type_scholarship`}
              label="Jenis Beasiswa"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name={`scholarships[${index}].year_start`}
              label="Tahun Mulai"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name={`scholarships[${index}].year_finish`}
              label="Tahun Selesai"
              placeholder="......"
              register={register}
            />
            <TextArea
              name={`scholarships[${index}].description`}
              label="Keterangan"
              placeholder="......"
              register={register}
            />
          </div>

          {fields.length > 1 && (
            <Button bg="danger" size="sm" onClick={() => remove(index)}>
              <MdDelete />
              Delete Beasiswa
            </Button>
          )}
        </div>
      ))}

      <Button bg="primary" size="sm" onClick={handleAddScholarship}>
        <BsPlusCircleFill />
        Tambah Beasiswa
      </Button>
    </>
  );
};

export default Form4;
