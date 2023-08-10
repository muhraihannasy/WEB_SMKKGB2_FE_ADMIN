import { useState, useEffect } from 'react';

// Libary
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Helper
import { uuidv4 } from '../../utils/Helper';

// Icon
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { BiChevronLeft } from 'react-icons/bi';

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
import TabsForm from '../../components/Tab/TabForm';
import Button from '../../components/Button';
import Form3 from '../../components/PPDB/Form/Form3';
import Form4 from '../../components/PPDB/Form/Form4';
import Form5 from '../../components/PPDB/Form/Form5';
import Form6 from '../../components/PPDB/Form/Form6';
import Form7 from '../../components/PPDB/Form/Form7';
import Form8 from '../../components/PPDB/Form/Form8';

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    scholarships: yup.array(
      yup.object({
        id: yup.string(),
        type_scholarship: yup.string(),
        year_start: yup.string(),
        year_finish: yup.string(),
        description: yup.string(),
      }),
    ),
    achievements: yup.array(
      yup.object({
        id: yup.string(),
        name: yup.string(),
        type: yup.string(),
        year: yup.string(),
        level: yup.string(),
        organizer: yup.string(),
      }),
    ),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Add_PPDB = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const form = useForm<FormData>({
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
      achievements: [
        {
          id: uuidv4(),
          name: '',
          type: '',
          year: '',
          level: '',
          organizer: '',
        },
      ],
    },
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = form;

  const tabs = [
    {
      id: 1,
      name: 'Akun Murid',
    },
    {
      id: 2,
      name: 'Data Murid',
    },
    {
      id: 3,
      name: 'Data Orang Tua/Wali',
    },
    {
      id: 4,
      name: 'Beasiswa',
    },
    {
      id: 5,
      name: 'Prestasi',
    },
    {
      id: 6,
      name: 'Registrasi',
    },
    {
      id: 7,
      name: 'Berkas',
    },
    {
      id: 8,
      name: 'Optional',
    },
  ];

  function handleOnSubmit(formValue: FormValue) {
    console.log(formValue);
  }
  console.log(errors);

  function handleDecrementTab() {
    if (currentTab > tabs[0].id && currentTab <= tabs.length) {
      setCurrentTab((prev) => prev - 1);
      return;
    }
  }

  function handleIncrementTab() {
    if (currentTab < tabs.length) {
      setCurrentTab((prev) => prev + 1);
      return;
    }
  }

  return (
    <DefaultLayout>
      <FormLayout title="Formulir Pendaftaran Siswa Baru">
        <div className="p-6.5">
          <TabsForm
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />

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
            {currentTab == 5 && (
              <Form5
                register={register}
                getValue={getValues}
                setValue={setValue}
                control={control}
              />
            )}
            {currentTab == 6 && <Form6 register={register} />}
            {currentTab == 7 && <Form7 register={register} />}
            {currentTab == 8 && <Form8 register={register} />}

            <div className="w-full grid grid-cols-3 gap-[1.2em] mt-[3em] ">
              {currentTab > 1 && (
                <Button bg="primary" size="sm" onClick={handleDecrementTab}>
                  <BiChevronLeft className="text-[1.7em] text-white" />
                  Sebelumnya
                </Button>
              )}
              {currentTab < tabs.length && (
                <Button bg="primary" size="sm" onClick={handleIncrementTab}>
                  Lanjut
                  <MdNavigateNext className="text-[1.7em] text-white" />
                </Button>
              )}
              <Button type="submit" bg="tertiary" size="sm" onClick={() => {}}>
                <BsFillSendFill />
                Submit
              </Button>
            </div>
          </form>
        </div>
      </FormLayout>

      <DevTool control={control} />
    </DefaultLayout>
  );
};

export default Add_PPDB;
