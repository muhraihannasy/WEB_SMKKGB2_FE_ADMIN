// Third Party
import { useForm, FormProvider } from 'react-hook-form';
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
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  function handleOnSubmit(formValue: FormValue) {
    console.log(formValue);
  }

  return (
    <div className="max-[1045px]:grid-cols-1 grid grid-cols-2 fixed top-0 left-0 w-full min-[1045px]:h-[100vh] h-full">
      <div className="max-[1045px]:fixed max-[1045px]:w-full max-[1045px]:bottom-0 max-[1045px]:rounded-tr-[2em] max-[1045px]:rounded-tl-[2em] max-[1045px]:order-1 flex min-[1045px]:items-center justify-center bg-white max-[500px]:px-[2em] max-[1045px]:mt-[10em] max-[1045px]:h-[35em] max-[1045px]:pb-[3em] max-[1045px]:overflow-y-scroll max-[1045px]:pt-[4em] z-[2] overflow-y-scroll pt-[30em]">
        <div className="max-[500px]:w-full max-[1045px]:mx-auto">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Sign Up</h2>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="min-[500px]:w-[27em] flex flex-col gap-y-6"
            >
              <Input
                name="fullname"
                label="Nama Lengkap"
                placeholder="......"
              />
              <Input
                name="from_school"
                label="Asal Sekolah"
                placeholder="......"
              />
              <InputSelect
                name="competency_1"
                label="Pillihan Kompetensi 1"
                placeholder="......"
                options={[1, 2]}
              />
              <InputSelect
                name="competency_2"
                label="Pillihan Kompetensi 2"
                placeholder="......"
                options={[1, 2]}
              />
              <InputSelect
                name="competency_3"
                label="Pillihan Kompetensi 3"
                placeholder="......"
                options={[1, 2]}
              />
              <Input name="phone" label="No Telepon" placeholder="......" />
              <Input name="email" label="Email" placeholder="......" />
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="......"
              />

              <div className="mb-5 mt-4">
                <Button type="submit" bg="primary" size="full">
                  Sign Up
                </Button>

                <p className="text-center mt-6 pb-[4em]">
                  Sudah Memiliki Akun ?{' '}
                  <Link to="/auth/signin" className="text-primary font-medium">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>

      <Screen />
    </div>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
