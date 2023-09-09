import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

// Icon
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

// Utils
import { uuidv4 } from '../../../utils/Helper';
import { typeAchievements, year } from '../../../utils/Data';

// Type
import Button from '../../Button';

// Component
import InputSelect from '../../forms_items/InputSelect';
import TextArea from '../../forms_items/TextArea';

const Form4: React.FC = () => {
  const { control } = useFormContext();

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

  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
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
              options={typeAchievements}
            />
            <InputSelect
              name={`scholarships[${index}].year_start`}
              label="Tahun Mulai"
              placeholder="......"
              options={year}
            />
            <InputSelect
              name={`scholarships[${index}].year_finish`}
              label="Tahun Selesai"
              placeholder="......"
              options={year}
            />
            <TextArea
              name={`scholarships[${index}].description`}
              label="Keterangan"
              placeholder="......"
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
