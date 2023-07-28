import { useState, useEffect } from 'react';

// Libary
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

// Helper
import { uuidv4 } from '../../utils/Helper';

// Icon
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

// Utils
import {
  competency,
  religion,
  uniform,
  extracurriculer,
  gender,
  specialNeeds,
  education,
  income,
  profession,
  typeAchievements,
  levelAchievements,
  year,
  receiver,
  reasonKip,
  typeRegistration,
} from '../../utils/Data';

// Types
import { FormValue } from '../../Types/Index';

// Layout
import DefaultLayout from '../../layout/DefaultLayout';
import FormLayout from '../../layout/FormLayout';

// Component
import Form1Admin from '../../components/PPDB/Form/Form1Admin';
import Form2 from '../../components/PPDB/Form/Form2';
import TabsForm from '../../components/PPDB/Form/TabForm';
import Button from '../../components/Button';
import Form3 from '../../components/PPDB/Form/Form3';
import Form4 from '../../components/PPDB/Form/Form4';

const Add_PPDB = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const form = useForm<FormValue>({
    defaultValues: {
      scholarships: [
        {
          id: uuidv4(),
          type_scholarship: '',
          year_start: '',
          year_finish: '',
          description: '',
        },
      ],
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = form;

  function handleOnSubmit(formValue: FormValue) {
    console.log(formValue);
  }

  return (
    <DefaultLayout>
      <FormLayout title="Formulir Pendaftaran Siswa Baru">
        <div className="p-6.5">
          <TabsForm currentTab={currentTab} setCurrentTab={setCurrentTab} />

          <form onSubmit={handleSubmit(handleOnSubmit)}>
            {currentTab == 1 && <Form1Admin register={register} />}
            {currentTab == 2 && <Form2 register={register} />}
            {currentTab == 3 && <Form3 register={register} />}
            {currentTab == 4 && (
              <Form4
                register={register}
                getValue={getValues}
                setValue={setValue}
                control={control}
              />
            )}

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-12">
              Submit
            </button>
          </form>
        </div>
      </FormLayout>

      <DevTool control={control} />
    </DefaultLayout>
  );
};

export default Add_PPDB;
