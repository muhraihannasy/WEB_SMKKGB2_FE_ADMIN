import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

// Utils
import { uuidv4 } from '../../../utils/Helper';
import { typeAchievements, levelAchievements, year } from '../../../utils/Data';

// Icon
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

// Component
import InputSelect from '../../forms_items/InputSelect';
import Input from '../../forms_items/Input';
import Button from '../../Button';

const Form5: React.FC = ({}) => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'achievements',
  });

  const handleAddAchievement = () => {
    const achievements = {
      id: uuidv4(),
      name: '',
      type: '',
      year: '',
      level: '',
      organizer: '',
    };

    append(achievements);
  };

  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10',
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id} className="mb-[2em]">
          <div className={style.wrapperInput}>
            <Input
              name={`achievements[${index}].name`}
              label="Nama Prestasi"
              placeholder="....."
            />
            <InputSelect
              name={`achievements[${index}].type`}
              label="Jenis Prestasi"
              placeholder="......"
              options={typeAchievements}
            />
            <InputSelect
              name={`achievements[${index}].year`}
              label="Tahun Mulai"
              placeholder="......"
              options={year}
            />
            <InputSelect
              name={`achievements[${index}].level`}
              label="Level"
              placeholder="......"
              options={levelAchievements}
            />
            <Input
              name={`achievements[${index}].organizer`}
              label="Penyelenggara"
              placeholder="....."
            />
          </div>

          {fields.length > 1 && (
            <Button
              bg="danger"
              size="sm"
              onClick={() => {
                remove(index);
              }}
            >
              <MdDelete className="text-xl" />
              Delete Beasiswa
            </Button>
          )}
        </div>
      ))}

      <Button bg="primary" size="sm" onClick={handleAddAchievement}>
        <BsPlusCircleFill />
        Tambah Prestasi
      </Button>
    </>
  );
};

export default Form5;
