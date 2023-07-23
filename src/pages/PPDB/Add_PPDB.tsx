import { useState, useEffect } from 'react';

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

// Interface
import {
  formPPDBAdminInterface,
  scholarshipInterface,
  achievementInterface,
  imagesUploadPPDBInterface,
} from '../../interfaces';

// Layout
import DefaultLayout from '../../layout/DefaultLayout';
import FormLayout from '../../layout/FormLayout';

// Component
import Input from '../../components/forms_items/Input';
import InputSelect from '../../components/forms_items/InputSelect';
import FormTitle from '../../components/forms_items/FormTitle';
import Button from '../../components/Button';
import TextArea from '../../components/forms_items/TextArea';
import InputFile from '../../components/forms_items/InputFile';

const Add_PPDB = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    ...formPPDBAdminInterface,
  });
  const [achievements, setAchievements] = useState([
    { ...achievementInterface },
  ]);
  const [scholarships, setScholarships] = useState([
    { ...scholarshipInterface },
  ]);
  const [imageUploads, setImageUploads] = useState([
    { ...imagesUploadPPDBInterface },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  console.log('sc', scholarships);
  //   console.log("fm", formData);
  return (
    <DefaultLayout>
      <FormLayout title="Formulir Pendaftaran Siswa Baru">
        <div className="p-6.5">
          <TabsForm currentTab={currentTab} setCurrentTab={setCurrentTab} />

          <form onSubmit={handleSubmit}>
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray mt-12">
              Submit
            </button>
          </form>
        </div>
      </FormLayout>
    </DefaultLayout>
  );
};

const TabsForm = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap flex items-center gap-2 mb-8 pb-1">
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(1)}
        active={currentTab == 1 ?? false}
      >
        Akun Murid
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(2)}
        active={currentTab == 2 ?? false}
      >
        Data Murid
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(3)}
        active={currentTab == 3 ?? false}
      >
        Data Orang Tua/Wali
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(4)}
        active={currentTab == 4 ?? false}
      >
        Beasiswa
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(5)}
        active={currentTab == 5 ?? false}
      >
        Prestasi
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(6)}
        active={currentTab == 6 ?? false}
      >
        Registrasi
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(7)}
        active={currentTab == 7 ?? false}
      >
        Berkas
      </Button>
      <Button
        type="button"
        bg="bg-meta-4"
        onClick={() => setCurrentTab(8)}
        active={currentTab == 8 ?? false}
      >
        Optinal
      </Button>
    </div>
  );
};

export default Add_PPDB;
