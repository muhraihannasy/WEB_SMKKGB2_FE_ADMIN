import { useMemo } from "react";

// data
import Data from "../../data.json";

// Layout
import DefaultLayout from '../layout/DefaultLayout';

// Component
import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';
import Datatables from "../components/Datatables";

const Users = () => {
 const columns = useMemo(
  () => [
    {
      Header: "Nama",
      accessor: "name",
    },
    {
      Header: "Code",
      accessor: "code",
    },
    {
      Header: "Package",
      accessor: "package",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ row }) => (
        <p className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success">
          Active
        </p>
      ),
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button className="hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"/></svg>
          </button>

          <button className="hover:text-primary">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M15 3c1.296 0 2.496.41 3.477 1.11l-9.134 9.133a1 1 0 1 0 1.414 1.414l9.134-9.134A5.977 5.977 0 0 1 21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10Zm6.657-.657a1 1 0 0 1 0 1.414L19.89 5.523a6.035 6.035 0 0 0-1.414-1.414l1.766-1.766a1 1 0 0 1 1.414 0Z"/></g></svg>
          </button>
        </div>
      ),
    },
  ],
  []
);

  const data = useMemo(() => Data, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <Datatables columns={columns} data={data} />
    </DefaultLayout>
  );
};

export default Users;
