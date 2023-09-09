// Third Party
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';

// Images
import LoginBackground from '/images/login.jpg';

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
    <div className="max-[1045px]:grid-cols-1 grid grid-cols-2 fixed top-0 left-0 w-full min-[1045px]:h-[100vh] h-full max-[1045px]:overflow-y-scroll">
      <div className="absolute invisible z-[-1] max-[1045px]:visible w-full bg-primary h-full overflow-hidden">
        <svg
          width="500"
          height="500"
          viewBox="0 0 1369 1944"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-12em] left-[0em] "
        >
          <path
            d="M878.5 986C878.5 1060.29 857.309 1127.48 823.124 1176.06C788.936 1224.64 741.847 1254.5 690 1254.5C638.153 1254.5 591.064 1224.64 556.876 1176.06C522.691 1127.48 501.5 1060.29 501.5 986C501.5 911.713 522.691 844.523 556.876 795.944C591.064 747.361 638.153 717.5 690 717.5C741.847 717.5 788.936 747.361 823.124 795.944C857.309 844.523 878.5 911.713 878.5 986Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M878.5 986C878.5 1060.29 857.309 1127.48 823.124 1176.06C788.936 1224.64 741.847 1254.5 690 1254.5C638.153 1254.5 591.064 1224.64 556.876 1176.06C522.691 1127.48 501.5 1060.29 501.5 986C501.5 911.713 522.691 844.523 556.876 795.944C591.064 747.361 638.153 717.5 690 717.5C741.847 717.5 788.936 747.361 823.124 795.944C857.309 844.523 878.5 911.713 878.5 986Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M986.5 985.5C986.5 1104.11 952.661 1211.42 898.027 1289.05C843.39 1366.67 768.051 1414.5 685 1414.5C601.949 1414.5 526.61 1366.67 471.973 1289.05C417.339 1211.42 383.5 1104.11 383.5 985.5C383.5 866.892 417.339 759.577 471.973 681.954C526.61 604.326 601.949 556.5 685 556.5C768.051 556.5 843.39 604.326 898.027 681.954C952.661 759.577 986.5 866.892 986.5 985.5Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M986.5 985.5C986.5 1104.11 952.661 1211.42 898.027 1289.05C843.39 1366.67 768.051 1414.5 685 1414.5C601.949 1414.5 526.61 1366.67 471.973 1289.05C417.339 1211.42 383.5 1104.11 383.5 985.5C383.5 866.892 417.339 759.577 471.973 681.954C526.61 604.326 601.949 556.5 685 556.5C768.051 556.5 843.39 604.326 898.027 681.954C952.661 759.577 986.5 866.892 986.5 985.5Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M1048.5 972C1048.5 1115.05 1007.67 1244.49 941.721 1338.12C875.774 1431.77 784.81 1489.5 684.5 1489.5C584.19 1489.5 493.226 1431.77 427.279 1338.12C361.335 1244.49 320.5 1115.05 320.5 972C320.5 828.954 361.335 699.514 427.279 605.875C493.226 512.232 584.19 454.5 684.5 454.5C784.81 454.5 875.774 512.232 941.721 605.875C1007.67 699.514 1048.5 828.954 1048.5 972Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M1048.5 972C1048.5 1115.05 1007.67 1244.49 941.721 1338.12C875.774 1431.77 784.81 1489.5 684.5 1489.5C584.19 1489.5 493.226 1431.77 427.279 1338.12C361.335 1244.49 320.5 1115.05 320.5 972C320.5 828.954 361.335 699.514 427.279 605.875C493.226 512.232 584.19 454.5 684.5 454.5C784.81 454.5 875.774 512.232 941.721 605.875C1007.67 699.514 1048.5 828.954 1048.5 972Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M1119.5 972C1119.5 1142.94 1070.72 1297.63 991.926 1409.54C913.13 1521.46 804.416 1590.5 684.5 1590.5C564.584 1590.5 455.87 1521.46 377.074 1409.54C298.282 1297.63 249.5 1142.94 249.5 972C249.5 801.064 298.282 646.374 377.074 534.457C455.87 422.537 564.584 353.5 684.5 353.5C804.416 353.5 913.13 422.537 991.926 534.457C1070.72 646.374 1119.5 801.064 1119.5 972Z"
            stroke="white"
            stroke-opacity="0.55"
            stroke-width="3"
          />
          <path
            d="M1119.5 972C1119.5 1142.94 1070.72 1297.63 991.926 1409.54C913.13 1521.46 804.416 1590.5 684.5 1590.5C564.584 1590.5 455.87 1521.46 377.074 1409.54C298.282 1297.63 249.5 1142.94 249.5 972C249.5 801.064 298.282 646.374 377.074 534.457C455.87 422.537 564.584 353.5 684.5 353.5C804.416 353.5 913.13 422.537 991.926 534.457C1070.72 646.374 1119.5 801.064 1119.5 972Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M1184.5 957C1184.5 1151.41 1129 1327.35 1039.35 1454.65C949.699 1581.95 825.985 1660.5 689.5 1660.5C553.015 1660.5 429.301 1581.95 339.648 1454.65C249.997 1327.35 194.5 1151.41 194.5 957C194.5 762.592 249.997 586.652 339.648 459.353C429.301 332.051 553.015 253.5 689.5 253.5C825.985 253.5 949.699 332.051 1039.35 459.353C1129 586.652 1184.5 762.592 1184.5 957Z"
            stroke="white"
            stroke-opacity="0.55"
            stroke-width="3"
          />
          <path
            d="M1184.5 957C1184.5 1151.41 1129 1327.35 1039.35 1454.65C949.699 1581.95 825.985 1660.5 689.5 1660.5C553.015 1660.5 429.301 1581.95 339.648 1454.65C249.997 1327.35 194.5 1151.41 194.5 957C194.5 762.592 249.997 586.652 339.648 459.353C429.301 332.051 553.015 253.5 689.5 253.5C825.985 253.5 949.699 332.051 1039.35 459.353C1129 586.652 1184.5 762.592 1184.5 957Z"
            stroke="white"
            stroke-opacity="0.55"
            stroke-width="3"
          />
          <path
            d="M1273.5 957C1273.5 1188.14 1207.54 1397.33 1100.97 1548.69C994.393 1700.06 847.304 1793.5 685 1793.5C522.696 1793.5 375.607 1700.06 269.034 1548.69C162.463 1397.33 96.5 1188.14 96.5 957C96.5 725.865 162.463 516.675 269.034 365.308C375.607 213.937 522.696 120.5 685 120.5C847.304 120.5 994.393 213.937 1100.97 365.308C1207.54 516.675 1273.5 725.865 1273.5 957Z"
            stroke="white"
            stroke-opacity="0.55"
            stroke-width="3"
          />
          <path
            d="M1273.5 957C1273.5 1188.14 1207.54 1397.33 1100.97 1548.69C994.393 1700.06 847.304 1793.5 685 1793.5C522.696 1793.5 375.607 1700.06 269.034 1548.69C162.463 1397.33 96.5 1188.14 96.5 957C96.5 725.865 162.463 516.675 269.034 365.308C375.607 213.937 522.696 120.5 685 120.5C847.304 120.5 994.393 213.937 1100.97 365.308C1207.54 516.675 1273.5 725.865 1273.5 957Z"
            stroke="white"
            stroke-opacity="0.55"
            stroke-width="3"
          />
          <path
            d="M1367.5 972C1367.5 1240.14 1290.96 1482.83 1167.29 1658.44C1043.61 1834.06 872.9 1942.5 684.5 1942.5C496.1 1942.5 325.387 1834.06 201.712 1658.44C78.04 1482.83 1.5 1240.14 1.5 972C1.5 703.862 78.04 461.172 201.712 285.556C325.387 109.936 496.1 1.5 684.5 1.5C872.9 1.5 1043.61 109.936 1167.29 285.556C1290.96 461.172 1367.5 703.862 1367.5 972Z"
            stroke="white"
            stroke-opacity="0.49"
            stroke-width="3"
          />
          <path
            d="M1367.5 972C1367.5 1240.14 1290.96 1482.83 1167.29 1658.44C1043.61 1834.06 872.9 1942.5 684.5 1942.5C496.1 1942.5 325.387 1834.06 201.712 1658.44C78.04 1482.83 1.5 1240.14 1.5 972C1.5 703.862 78.04 461.172 201.712 285.556C325.387 109.936 496.1 1.5 684.5 1.5C872.9 1.5 1043.61 109.936 1167.29 285.556C1290.96 461.172 1367.5 703.862 1367.5 972Z"
            stroke="white"
            stroke-opacity="0.55"
            stroke-width="3"
          />
          <path
            d="M942.5 985.5C942.5 1085.43 914.027 1175.78 868.12 1241.1C822.209 1306.41 759.019 1346.5 689.5 1346.5C619.981 1346.5 556.791 1306.41 510.88 1241.1C464.973 1175.78 436.5 1085.43 436.5 985.5C436.5 885.574 464.973 795.216 510.88 729.904C556.791 664.586 619.981 624.5 689.5 624.5C759.019 624.5 822.209 664.586 868.12 729.904C914.027 795.216 942.5 885.574 942.5 985.5Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M942.5 985.5C942.5 1085.43 914.027 1175.78 868.12 1241.1C822.209 1306.41 759.019 1346.5 689.5 1346.5C619.981 1346.5 556.791 1306.41 510.88 1241.1C464.973 1175.78 436.5 1085.43 436.5 985.5C436.5 885.574 464.973 795.216 510.88 729.904C556.791 664.586 619.981 624.5 689.5 624.5C759.019 624.5 822.209 664.586 868.12 729.904C914.027 795.216 942.5 885.574 942.5 985.5Z"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </div>

      <div className="max-[1045px]:fixed max-[1045px]:w-full max-[1045px]:bottom-0 max-[1045px]:rounded-tr-[2em] max-[1045px]:rounded-tl-[2em] max-[1045px]:order-1 flex min-[1045px]:items-center justify-center bg-white max-[500px]:px-[2em] max-[1045px]:mt-[10em] max-[1045px]:h-max max-[1045px]:pb-[3em] max-[1045px]:overflow-y-scroll max-[1045px]:pt-[4em]">
        <div className="max-[500px]:w-full max-[1045px]:mx-auto">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Sign In</h2>

          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="min-[500px]:w-[27em]  w-full"
          >
            <div className="flex flex-col gap-4">
              <Input
                name="email"
                label="Email"
                placeholder="Masukan Email"
                register={register}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Masukan Password"
                register={register}
              />
            </div>

            <Link
              to="/auth/signup"
              className="text-primary font-medium block my-4 text-right"
            >
              Lupa Password ?
            </Link>

            <Button bg="primary" size="full">
              Sign In
            </Button>

            <p className="text-center mt-6">
              Belum Memiliki Akun ?{' '}
              <Link to="/auth/signup" className="text-primary font-medium">
                Daftar Disini
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Screen />
    </div>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
