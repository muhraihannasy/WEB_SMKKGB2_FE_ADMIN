// Third Party
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';
import InputSelect from '../../components/forms_items/InputSelect';

// Images
import ROUTE from '../../route';
import { competency } from '../../utils/Data';
import { postData } from '../../utils/ApiUtils';
import { toastError, toastSuccess } from '../../components/Toast';

interface FormValue {
  fullname: string;
  from_school: string;
  phone: string;
  email: string;
  competency_pick_1: string;
  competency_pick_2: string;
  competency_pick_3: string;
  password: string;
}

const formSchema = Yup.object().shape({
  fullname: Yup.string().required('Field Tidak Boleh Kosong'),
  from_school: Yup.string().required('Field Tidak Boleh Kosong'),
  phone: Yup.string().required('Field Tidak Boleh Kosong'),
  email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
  competency_pick_1: Yup.string().required('Field Tidak Boleh Kosong'),
  competency_pick_2: Yup.string().required('Field Tidak Boleh Kosong'),
  competency_pick_3: Yup.string().required('Field Tidak Boleh Kosong'),
  password: Yup.string()
    .min(6, 'Password harus memiliki minimal 6 karakter')
    .required('Password wajib diisi'),
});

const SignIn = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(formSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  async function handleOnSubmit(formValue: FormValue) {
    try {
      const request = await postData('/auth/register', formValue);
      toastSuccess('Behasil Mendaftar');

      navigate(ROUTE.Auth.login);
    } catch (error: any) {
      if (error.response.data.error == 'Unauthorized') {
        toastError('Email atau Password Salah');
      }
    }
  }

  return (
    <main className="max-[1045px]:grid-cols-1 grid grid-cols-2 top-0 left-0 w-full min-[1045px]:h-[100vh] bg-danger">
      <div className=" max-[1045px]:relative max-[1045px]:w-full max-[1045px]:rounded-tr-[2em] max-[1045px]:rounded-tl-[2em] max-[1045px]:order-1 flex justify-center bg-white max-[1045px]:mt-[-12em] pt-[3em]  z-[9] overflow-y-scroll overflow-x-hidden">
        <div className="max-[1045px]:px-[2em] max-[500px]:w-full max-[1045px]:mx-auto  ">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Daftar</h2>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="min-[500px]:w-[27em]  w-full"
            >
              <div className="flex flex-col gap-4">
                <Input
                  name="fullname"
                  label="Nama Lengkap"
                  placeholder="......"
                  errors={errors}
                />
                <Input
                  name="from_school"
                  label="Asal Sekolah"
                  placeholder="......"
                  errors={errors}
                />
                <InputSelect
                  name="competency_pick_1"
                  label="Pillihan Kompetensi 1"
                  placeholder="......"
                  options={competency}
                />
                <InputSelect
                  name="competency_pick_2"
                  label="Pillihan Kompetensi 2"
                  placeholder="......"
                  options={competency}
                />
                <InputSelect
                  name="competency_pick_3"
                  label="Pillihan Kompetensi 3"
                  placeholder="......"
                  options={competency}
                />
                <Input
                  name="phone"
                  label="No Telepon"
                  placeholder="......"
                  errors={errors}
                />
                <Input
                  name="email"
                  label="Email"
                  placeholder="......"
                  errors={errors}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="......"
                  errors={errors}
                />
              </div>

              <Link
                to="/auth/signup"
                className="text-primary font-medium block my-4 text-right"
              >
                Lupa Password ?
              </Link>

              <Button type="submit" bg="primary" size="full">
                Daftar Sekarang
              </Button>

              <p className="text-center mt-6 pb-16">
                Sudah Memiliki Akun ?{' '}
                <Link
                  to={ROUTE.Auth.login}
                  className="text-primary font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>

      <Screen />
    </main>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
