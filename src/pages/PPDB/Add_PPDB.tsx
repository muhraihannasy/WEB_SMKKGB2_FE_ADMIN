import { useState, useEffect } from 'react';

// Libary
import { useForm } from 'react-hook-form';

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

const Add_PPDB = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const form = useForm<FormValue>();
  const {
    register,
    handleSubmit,
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

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-12">
              Submit
            </button>
          </form>
        </div>
      </FormLayout>
    </DefaultLayout>
  );
};

export default Add_PPDB;
