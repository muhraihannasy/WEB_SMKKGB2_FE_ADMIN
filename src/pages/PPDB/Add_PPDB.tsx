import { useState, useEffect } from 'react';

// Libary
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

// Helper
import { uuidv4 } from '../../utils/Helper';

// Icon
import { BsFillSendFill } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { BiChevronLeft } from 'react-icons/bi';

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

const schema = yup
  .object({
    fullname: yup.string().required(),
    from_school: yup.string().required(),
    phone: yup.string().required(),
    type_registration: yup.string().required(),
    weight: yup.string().required(),
    height: yup.string().required(),
    special_needs: yup.string().required(),
    religion: yup.string().required(),
    birth_place: yup.string().required(),
    birth_date: yup.string().required(),
    address: yup.string().required(),
    rt: yup.string().required(),
    rw: yup.string().required(),
    kelurahan: yup.string().required(),
    kecamatan: yup.string().required(),
    kodepos: yup.string().required(),
    nisn: yup.string().required(),
    // nisn_image: yup.string().required(),
    // kartu_keluarga_image: yup.string().required(),
    no_serial_skhus: yup.string().required(),
    no_serial_diploma: yup.string().required(),
    no_examinee: yup.string().required(),
    competency_pick_1: yup.string().required(),
    competency_pick_2: yup.string().required(),
    competency_pick_3: yup.string().required(),
    extracurricular_1: yup.string().required(),
    extracurricular_2: yup.string().required(),
    uniform_1: yup.string().required(),
    uniform_2: yup.string().required(),
    uniform_3: yup.string().required(),
    uniform_4: yup.string().required(),

    // Optinal
    no_kks: yup.string(),
    image_kks: yup.string(),
    receiver_kps: yup.string(),
    no_kps: yup.string(),
    image_kps: yup.string(),
    receiver_kip: yup.string(),
    name_kip: yup.string(),
    reason_kip: yup.string(),
    image_kip: yup.string(),

    // Parent
    father_name: yup.string().required(),
    father_nik: yup.string().required(),
    father_birth_place: yup.string().required(),
    father_birth_date: yup.string().required(),
    father_education: yup.string().required(),
    father_job: yup.string().required(),
    father_income: yup.string().required(),

    mother_name: yup.string().required(),
    mother_nik: yup.string().required(),
    mother_birth_place: yup.string().required(),
    mother_birth_date: yup.string().required(),
    mother_education: yup.string().required(),
    mother_job: yup.string().required(),
    mother_income: yup.string().required(),

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
      image_kip: "",
      image_kps: "",
      image_kks: "",
      
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
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  function handleOnSubmit(formValue: any) {
    const { address, kecamatan, kelurahan, rt, rw, kodepos } = formValue;

    // Combine Address
    const new_address = `${address}|${kecamatan}|${kelurahan}|${rt}|${rw}|${kodepos}`;
    formValue.address_combine = new_address;

    const propertiesToRemove = [
      'address',
      'kecamatan',
      'kelurahan',
      'rt',
      'rw',
      'kodepos',
    ];

    // Filtering To Remove Properties Unused Properties
    const newFormValue = Object.fromEntries(
      Object.entries(formValue).filter(
        ([key]) => !propertiesToRemove.includes(key),
      ),
    );

    console.log(newFormValue);
  }

  const notify = () =>
    toast.error('Form masih ada yang kosong, silahkan dicek kembali.', {
      position: toast.POSITION.TOP_RIGHT,
    });

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

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      notify();
      return;
    }
  }, [errors]);

  console.log(errors);

  return (
    <DefaultLayout>
      <FormLayout title="Formulir Pendaftaran Siswa Baru">
        <div className="p-6.5">
          <TabsForm
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />

          <FormProvider {...form}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              {currentTab == 1 && <Form1Admin />}
              {currentTab == 2 && <Form2 />}
              {currentTab == 3 && <Form3 />}
              {currentTab == 4 && <Form4 />}
              {currentTab == 5 && <Form5 />}
              {currentTab == 6 && <Form6 />}
              {currentTab == 7 && <Form7 />}
              {currentTab == 8 && <Form8 />}

              <div className="w-full grid grid-cols-3 gap-[1.2em] mt-[5em] ">
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
                <Button
                  type="submit"
                  bg="tertiary"
                  size="sm"
                  onClick={() => {}}
                >
                  <BsFillSendFill />
                  Submit
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </FormLayout>

      <DevTool control={control} />
    </DefaultLayout>
  );
};

export default Add_PPDB;
