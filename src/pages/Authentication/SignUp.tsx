// Third Party
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';
import InputSelect from '../../components/forms_items/InputSelect';

// Images
import background from '../../images/background_abstract.jpg';

interface FormValue {
  email: string;
  password: string;
}

const SignIn = () => {
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
    <div className="grid grid-cols-2 fixed top-0 left-0 w-full h-full bg-white">
      <div className="flex items-center justify-center overflow-y-scroll">
        <div className="pt-[30em] pb-10">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Sign Up</h2>

          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="w-[27em] flex flex-col gap-y-6"
          >
            <Input
              name="fullname"
              label="Nama Lengkap"
              placeholder="......"
              register={register}
            />
            <Input
              name="from_school"
              label="Asal Sekolah"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name="competency_1"
              label="Pillihan Kompetensi 1"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name="competency_2"
              label="Pillihan Kompetensi 2"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name="competency_3"
              label="Pillihan Kompetensi 3"
              placeholder="......"
              register={register}
            />
            <Input
              name="phone"
              label="No Telepon"
              placeholder="......"
              register={register}
            />
            <Input
              name="email"
              label="Email"
              placeholder="......"
              register={register}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="......"
              register={register}
            />

            <div className="mb-5 mt-4">
              <Button type="submit" bg="primary" size="full">
                Sign Up
              </Button>

              <p className="text-center mt-6">
                Sudah Memiliki Akun ?{' '}
                <Link to="/auth/signin" className="text-primary font-medium">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Screen />
    </div>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
