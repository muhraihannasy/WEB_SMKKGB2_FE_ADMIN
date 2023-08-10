// Icon
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

// Utils
import { uuidv4 } from '../../../utils/Helper';

// Type
import Button from '../../Button';

// Component
import InputSelect from '../../forms_items/InputSelect';
import React, { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';
import Input from '../../forms_items/Input';

interface FormPPDB {
  register: any;
  getValue: any;
  setValue: any;
  control: any;
}

const Form5: React.FC<FormPPDB> = ({
  register,
  control,
  getValue,
  setValue,
}) => {
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
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-[1.8em] mb-10',
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
              register={register}
              control={control}
            />
            <InputSelect
              name={`achievements[${index}].type`}
              label="Jenis Prestasi"
              placeholder="......"
              register={register}
              control={control}
            />
            <InputSelect
              name={`achievements[${index}].year`}
              label="Tahun Mulai"
              placeholder="......"
              register={register}
              control={control}
            />
            <InputSelect
              name={`achievements[${index}].level`}
              label="Level"
              placeholder="......"
              register={register}
              control={control}
            />
            <Input
              name={`achievements[${index}].organizer`}
              label="Penyelenggara"
              placeholder="....."
              register={register}
              control={control}
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
