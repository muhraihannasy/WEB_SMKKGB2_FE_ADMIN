import { useState, useEffect } from "react";

// Icon
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

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
} from "../../utils/data";

// Interface
import {
  formPPDBAdminInterface,
  scholarshipInterface,
  achievementInterface,
  imagesUploadPPDBInterface,
} from "../../interfaces";

// Layout
import DefaultLayout from "../../layout/DefaultLayout";
import FormLayout from "../../layout/FormLayout";

// Component
import Input from "../../components/forms/Input";
import InputSelect from "../../components/forms/InputSelect";
import FormTitle from "../../components/forms/FormTitle";
import Button from "../../components/Button";
import TextArea from "../../components/forms/TextArea";
import InputFile from "../../components/forms/InputFile";

const Add_PPDB_Student = () => {
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

  console.log("sc", scholarships);
  //   console.log("fm", formData);
  return (
    <DefaultLayout>
      <FormLayout title="Formulir Pendaftaran Siswa Baru">
        <div className="p-6.5">
          <TabsForm currentTab={currentTab} setCurrentTab={setCurrentTab} />

          <form onSubmit={handleSubmit}>
            <Form_1
              isActive={currentTab == 1}
              formData={formData}
              setFormData={setFormData}
            />

            <Form_2
              isActive={currentTab == 2}
              formData={formData}
              setFormData={setFormData}
            />

            <Form_3
              isActive={currentTab == 3}
              formData={formData}
              setFormData={setFormData}
            />

            <Form_4
              isActive={currentTab == 4}
              scholarships={scholarships}
              setScholarships={setScholarships}
            />

            <Form_5
              isActive={currentTab == 5}
              formData={formData}
              setFormData={setFormData}
              achievements={achievements}
              setAchievement={setAchievements}
            />

            <Form_6
              isActive={currentTab == 6}
              formData={formData}
              setFormData={setFormData}
            />

            <Form_7
              isActive={currentTab == 7}
              imageUploads={imageUploads}
              setImageUploads={setImageUploads}
            />

            <Form_8
              isActive={currentTab == 8}
              formData={formData}
              setFormData={setFormData}
            />

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

const Form_1 = ({ isActive, formData, setFormData }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <div className="mb-4.5 grid lg:grid-cols-3 sm:grid-cols-2  gap-6">
        <Input
          type="text"
          label="Nama Lengkap"
          placeholder="..."
          field="fullname"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="Asal Sekolah"
          placeholder="..."
          field="from_school"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="No Telepon"
          placeholder="..."
          field="phone"
          formData={formData}
          setFormData={setFormData}
        />
        <InputSelect
          label="Piliihan Kompetensi 1"
          placeholder="..."
          field="class1"
          formData={formData}
          setFormData={setFormData}
          options={competency}
        />
        <InputSelect
          label="Piliihan Kompetensi 2"
          placeholder="..."
          field="class2"
          formData={formData}
          setFormData={setFormData}
          options={competency}
        />
        <InputSelect
          label="Piliihan Kompetensi 3"
          placeholder="..."
          field="class3"
          formData={formData}
          setFormData={setFormData}
          options={competency}
        />

        <Input
          type="email"
          label="email"
          placeholder="..."
          field="email"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="password"
          label="Password"
          placeholder="..."
          field="password"
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

const Form_2 = ({ isActive, formData, setFormData }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <div className="mb-4.5  grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <Input
          type="text"
          label="NISN"
          placeholder="..."
          field="nisn"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="NIK"
          placeholder="..."
          field="nik"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="No. Registrasi Akta lahir"
          placeholder="..."
          field="no_certificate_registration"
          formData={formData}
          setFormData={setFormData}
        />
        <InputSelect
          label="Agama"
          placeholder="..."
          field="religion"
          formData={formData}
          setFormData={setFormData}
          options={religion}
        />
        <Input
          type="number"
          label="Berat Badan"
          placeholder="..."
          field="weight"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="number"
          label="Tinggi Badan"
          placeholder="..."
          field="height"
          formData={formData}
          setFormData={setFormData}
        />
        <InputSelect
          label="Jenis Kelamin"
          placeholder="..."
          field="gender"
          formData={formData}
          setFormData={setFormData}
          options={gender}
        />
        <InputSelect
          label="Berkebutuhan Khusus"
          placeholder="..."
          field="special_needs"
          formData={formData}
          setFormData={setFormData}
          options={specialNeeds}
        />
        <Input
          type="date"
          label="Tanggal Lahir"
          placeholder="..."
          field="date"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="Tempat Lahir"
          placeholder="..."
          field="city"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="Alamat"
          placeholder="..."
          field="alamat"
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex items-center gap-4">
          <Input
            type="number"
            label="RT"
            placeholder="..."
            field="rt"
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            type="number"
            label="RW"
            placeholder="..."
            field="rt"
            formData={formData}
            setFormData={setFormData}
          />
        </div>

        <Input
          type="text"
          label="Kelurahan"
          placeholder="..."
          field="kelurahan"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="Kecamatan"
          placeholder="..."
          field="kecamatan"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="number"
          label="Kodepos"
          placeholder="..."
          field="kodepos"
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

const Form_3 = ({ isActive, formData, setFormData }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      {/* ============= Data Ayah Kandung ============= */}

      <FormTitle title="Data Ayah Kandung" />
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mb-12">
        <Input
          type="text"
          label="Nama Ayah Kandung"
          placeholder="..."
          field="father_name"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="NIK Ayah"
          placeholder="..."
          field="father_nik"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="date"
          label="Tanggal Lahir"
          placeholder="..."
          field="father_date"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="Tempat Lahir"
          placeholder="..."
          field="father_city"
          formData={formData}
          setFormData={setFormData}
        />

        <InputSelect
          label="Pendidikan"
          placeholder="..."
          field="father_education"
          formData={formData}
          setFormData={setFormData}
          options={education}
        />
        <InputSelect
          label="Pekerjaan"
          placeholder="..."
          field="father_job"
          formData={formData}
          setFormData={setFormData}
          options={profession}
        />
        <InputSelect
          label="Penghasilan Bulanan"
          placeholder="..."
          field="father_income"
          formData={formData}
          setFormData={setFormData}
          options={income}
        />
      </div>

      {/* ============= Data Ayah Kandung ============= */}

      {/* ============= Data Ayah Kandung ============= */}

      <FormTitle title="Data Ibu Kandung" />
      <div className="mb-4.5  grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <Input
          type="text"
          label="Nama Ibu Kandung"
          placeholder="..."
          field="mother_name"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="NIK Ibu"
          placeholder="..."
          field="mother_nik"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="date"
          label="Tanggal Lahir"
          placeholder="..."
          field="mother_date"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="Tempat Lahir"
          placeholder="..."
          field="mother_city"
          formData={formData}
          setFormData={setFormData}
        />

        <InputSelect
          label="Pendidikan"
          placeholder="..."
          field="mother_education"
          formData={formData}
          setFormData={setFormData}
          options={education}
        />
        <InputSelect
          label="Pekerjaan"
          placeholder="..."
          field="mother_job"
          formData={formData}
          setFormData={setFormData}
          options={profession}
        />
        <InputSelect
          label="Penghasilan Bulanan"
          placeholder="..."
          field="mother_income"
          formData={formData}
          setFormData={setFormData}
          options={income}
        />
      </div>

      {/* ============= Data Ayah Kandung ============= */}
    </div>
  );
};

const Form_4 = ({ isActive, scholarships, setScholarships }) => {
  function onAddScholarship() {
    const field = { ...scholarshipInterface };
    setScholarships([...scholarships, field]);
  }

  function onDeleteScholarship(i) {
    const newScholarships = [...scholarships];
    newScholarships.splice(i, 1);

    setScholarships(newScholarships);
  }

  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      {/* ============= Data Ayah Kandung ============= */}

      {scholarships.map((item, i) => (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-8" key={i}>
            <Input
              formDataType="array"
              position={i}
              type="text"
              label="Jenis Beasiswa"
              placeholder="..."
              field="type_scholarship"
              data={scholarships}
              formData={item}
              setFormData={setScholarships}
            />
            <InputSelect
              formDataType="array"
              position={i}
              label="Tahun Mulai"
              placeholder="..."
              field="year_start_at_scholarship"
              formData={scholarships}
              setFormData={setScholarships}
              data={scholarships}
              options={year}
            />
            <InputSelect
              formDataType="array"
              position={i}
              label="Tahun Selesai"
              placeholder="..."
              field="year_finish_at_scholarship"
              formData={scholarships}
              setFormData={setScholarships}
              data={scholarships}
              options={year}
            />
            <TextArea
              formDataType="array"
              position={i}
              label="Keterangan"
              placeholder="..."
              field="descriptions_scholarship"
              formData={scholarships}
              data={scholarships}
              setFormData={setScholarships}
            />
          </div>
          {scholarships.length > 1 && (
            <div className="flex items-center justify-end gap-3 mb-12">
              <Button
                type="button"
                bg="bg-meta-1"
                onClick={() => onDeleteScholarship(i)}
              >
                <AiOutlineDelete className="text-[1.3em]" />
                Hapus
              </Button>
              {scholarships.length > 0}
            </div>
          )}
        </>
      ))}

      <div className="mb-8 flex justify-end">
        <Button type="button" bg="bg-meta-3" onClick={onAddScholarship}>
          <IoIosAddCircleOutline className="text-[1.4em]" />
          Tambah
        </Button>
      </div>
      {/* ============= Data Ayah Kandung ============= */}
    </div>
  );
};

const Form_5 = ({
  isActive,
  formData,
  setFormData,
  achievements,
  setAchievement,
}) => {
  function onAddScholarship() {
    const field = { ...achievementInterface };
    setAchievement([...achievements, field]);
  }

  function onDeleteScholarship(i) {
    const newAchievements = [...achievements];
    newAchievements.splice(i, 1);

    setAchievement(newAchievements);
  }

  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      {/* ============= Data Ayah Kandung ============= */}

      {achievements.map((item, i) => (
        <>
          <div className="grid sm:grid-cols-2 gap-6 mb-8" key={i}>
            <Input
              formDataType="array"
              position={i}
              type="text"
              label="Nama Prestasi"
              placeholder="..."
              field="name_achievement"
              data={achievements}
              formData={item}
              setFormData={setAchievement}
            />
            <InputSelect
              formDataType="array"
              position={i}
              label="Jenis Prestasi"
              placeholder="..."
              field="type_achievement"
              formData={achievements}
              setFormData={setAchievement}
              data={achievements}
              options={typeAchievements}
            />
            <InputSelect
              formDataType="array"
              position={i}
              label="Tahun"
              placeholder="..."
              field="year_achievement"
              formData={achievements}
              setFormData={setAchievement}
              data={achievements}
              options={year}
            />
            <InputSelect
              formDataType="array"
              position={i}
              label="Tingkat"
              placeholder="..."
              field="level_achievement"
              formData={achievements}
              setFormData={setAchievement}
              data={achievements}
              options={levelAchievements}
            />
            <Input
              formDataType="array"
              position={i}
              type="text"
              label="Penyelenggara"
              placeholder="..."
              field="organinizer_achievement"
              data={achievements}
              formData={item}
              setFormData={setAchievement}
            />
          </div>
          {achievements.length > 1 && (
            <div className="flex items-center justify-end gap-3 mb-12">
              <Button
                type="button"
                bg="bg-meta-1"
                onClick={() => onDeleteScholarship(i)}
              >
                <AiOutlineDelete className="text-[1.3em]" />
                Hapus
              </Button>
              {achievements.length > 0}
            </div>
          )}
        </>
      ))}

      <div className="mb-8 flex justify-end">
        <Button type="button" bg="bg-meta-3" onClick={onAddScholarship}>
          <IoIosAddCircleOutline className="text-[1.4em]" />
          Tambah
        </Button>
      </div>
      {/* ============= Data Ayah Kandung ============= */}
    </div>
  );
};

const Form_6 = ({ isActive, formData, setFormData }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <div className="mb-4.5 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <InputSelect
          label="Jenis Pendaftaran"
          placeholder="..."
          field="type_registration"
          formData={formData}
          setFormData={setFormData}
          options={typeRegistration}
        />
        <Input
          type="text"
          label="No Peserta Ujian"
          placeholder="..."
          field="no_examinee"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="No. Seri Ijazah"
          placeholder="..."
          field="no_serial_diploma"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="text"
          label="No SKHUS"
          placeholder="..."
          field="no_serial_skhus"
          formData={formData}
          setFormData={setFormData}
        />

        <InputSelect
          label="Ekstrakurikuler 1"
          placeholder="..."
          field="extra1"
          formData={formData}
          setFormData={setFormData}
          options={extracurriculer}
        />

        <InputSelect
          label="Ekstrakurikuler 2"
          placeholder="..."
          field="extra2"
          formData={formData}
          setFormData={setFormData}
          options={extracurriculer}
        />

        <InputSelect
          label="Baju Olahraga"
          placeholder="..."
          field="uniform1"
          formData={formData}
          setFormData={setFormData}
          options={uniform}
        />
        <InputSelect
          label="Baju Wear Pack (Khusus Jurusan TKJ)"
          placeholder="..."
          field="uniform2"
          formData={formData}
          setFormData={setFormData}
          options={uniform}
        />
        <InputSelect
          label="Baju Kotak-Kotak"
          placeholder="..."
          field="uniform3"
          formData={formData}
          setFormData={setFormData}
          options={uniform}
        />
        <InputSelect
          label="Jaz Almamater"
          placeholder="..."
          field="uniform3"
          formData={formData}
          setFormData={setFormData}
          options={uniform}
        />
      </div>
    </div>
  );
};

const Form_7 = ({ isActive, imageUploads, setImageUploads }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <div className="mb-4.5 grid lg:grid-cols-3 sm:grid-cols-2 gap-y-12 gap-x-6">
        <InputFile
          label="Foto Scan Nisn"
          field="nisn_image"
          imageUploads={imageUploads}
          setImageUploads={setImageUploads}
        />
        <InputFile
          label="Foto Scan Kartu Keluarga"
          field="kartu_keluarga_image"
          imageUploads={imageUploads}
          setImageUploads={setImageUploads}
        />
        <InputFile
          label="Foto Scan Kartu KIP (Optional)"
          field="foto_kip"
          imageUploads={imageUploads}
          setImageUploads={setImageUploads}
        />
        <InputFile
          label="Foto Scan Kartu KIP (Optional)"
          field="foto_kks"
          imageUploads={imageUploads}
          setImageUploads={setImageUploads}
        />
        <InputFile
          label="Foto Scan Kartu KPS (Optional)"
          field="foto_kps"
          imageUploads={imageUploads}
          setImageUploads={setImageUploads}
        />
      </div>
    </div>
  );
};

const Form_8 = ({ isActive, formData, setFormData }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"}`}>
      <div className="mb-4.5 grid lg:grid-cols-3 sm:grid-cols-2  gap-6">
        <Input
          type="number"
          label="No KKS"
          placeholder="..."
          field="no_kks"
          formData={formData}
          setFormData={setFormData}
        />
        <InputSelect
          label="Penerima KPS"
          placeholder="..."
          field="receiver_kps"
          formData={formData}
          setFormData={setFormData}
          options={receiver}
        />
        <Input
          type="number"
          label="No KPS"
          placeholder="..."
          field="no_kks"
          formData={formData}
          setFormData={setFormData}
        />
        <InputSelect
          label="Penerima KIP"
          placeholder="..."
          field="receiver_kip"
          formData={formData}
          setFormData={setFormData}
          options={receiver}
        />
        <Input
          type="text"
          label="Nama Tertera Di KIP"
          placeholder="..."
          field="name_kip"
          formData={formData}
          setFormData={setFormData}
        />
        <Input
          type="number"
          label="No KIP"
          placeholder="..."
          field="no_kip"
          formData={formData}
          setFormData={setFormData}
        />
        <TextArea
          formDataType="array"
          label="Keterangan"
          placeholder="..."
          field="reason_kip"
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default Add_PPDB_Student;
