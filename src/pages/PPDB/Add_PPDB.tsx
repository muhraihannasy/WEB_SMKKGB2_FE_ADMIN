import { useState, useEffect } from 'react';

// Libary
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

// Helper
import { uuidv4 } from '../../utils/Helper';
import { PPDB_ADMIN_ADD_FAKER } from '../../utils/Faker';

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
import { toastError } from '../../components/Toast';

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
    fullname: yup.string().required('Field harus Diisi'),
    email: yup
      .string()
      .email('Email tidak valid')
      .required('Email wajib diisi'),
    password: yup
      .string()
      .min(6, 'Password harus memiliki minimal 6 karakter')
      .required('Password wajib diisi'),
    from_school: yup.string().required('Field harus Diisi'),
    phone: yup.string().required('Field harus Diisi'),
    type_registration: yup.string().required('Field harus Diisi'),
    weight: yup.string().required('Field harus Diisi'),
    height: yup.string().required('Field harus Diisi'),
    special_needs: yup.string().required('Field harus Diisi'),
    religion: yup.string().required('Field harus Diisi'),
    birth_place: yup.string().required('Field harus Diisi'),
    birth_date: yup.string().required('Field harus Diisi'),
    address: yup.string().required('Field harus Diisi'),
    rt: yup.string().required('Field harus Diisi'),
    rw: yup.string().required('Field harus Diisi'),
    kelurahan: yup.string().required('Field harus Diisi'),
    kecamatan: yup.string().required('Field harus Diisi'),
    kodepos: yup.string().required('Field harus Diisi'),
    nisn: yup.string().required('Field harus Diisi'),
    nik: yup.string().required('Field harus Diisi'),
    nisn_image: yup.string().required('Field harus Diisi'),
    kartu_keluarga_image: yup.string().required('Field harus Diisi'),
    no_serial_skhus: yup.string().required('Field harus Diisi'),
    no_serial_diploma: yup.string().required('Field harus Diisi'),
    no_examinee: yup.string().required('Field harus Diisi'),
    competency_pick_1: yup.string().required('Field harus Diisi'),
    competency_pick_2: yup.string().required('Field harus Diisi'),
    competency_pick_3: yup.string().required('Field harus Diisi'),
    extracurricular_1: yup.string().required('Field harus Diisi'),
    extracurricular_2: yup.string().required('Field harus Diisi'),
    uniform_1: yup.string().required('Field harus Diisi'),
    uniform_2: yup.string().required('Field harus Diisi'),
    uniform_3: yup.string().required('Field harus Diisi'),
    uniform_4: yup.string().required('Field harus Diisi'),

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
    father_name: yup.string().required('Field harus Diisi'),
    father_nik: yup.string().required('Field harus Diisi'),
    father_birth_place: yup.string().required('Field harus Diisi'),
    father_birth_date: yup.string().required('Field harus Diisi'),
    father_education: yup.string().required('Field harus Diisi'),
    father_job: yup.string().required('Field harus Diisi'),
    father_income: yup.string().required('Field harus Diisi'),

    mother_name: yup.string().required('Field harus Diisi'),
    mother_nik: yup.string().required('Field harus Diisi'),
    mother_birth_place: yup.string().required('Field harus Diisi'),
    mother_birth_date: yup.string().required('Field harus Diisi'),
    mother_education: yup.string().required('Field harus Diisi'),
    mother_job: yup.string().required('Field harus Diisi'),
    mother_income: yup.string().required('Field harus Diisi'),

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
  .required('Field harus Diisi');

type FormData = yup.InferType<typeof schema>;

const Add_PPDB = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const form = useForm<FormData>({
    defaultValues: {
      ...PPDB_ADMIN_ADD_FAKER(),
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
    toastError('Form masih ada yang kosong, silahkan dicek kembali.');

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
