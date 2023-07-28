// Icon
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

// Type
import Button from '../../Button';

// Component
import InputSelect from '../../forms_items/InputSelect';
import TextArea from '../../forms_items/TextArea';

interface FormPPDB {
  register: any;
  scholarships: any;
  setScholarships: any;
}

const Form4: React.FC<FormPPDB> = ({
  register,
  scholarships,
  setScholarships,
}) => {
  const style = {
    titleForm: 'font-semibold text-[1.5em] text-black mb-5 underline',
    wrapperInput: 'grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10',
  };

  const handleAddScholarship = () => {
    const scholarship = {
      type_scholarship: '',
      year_start: '',
      year_finish: '',
      description: '',
    };

    let scholarshipsTemporary = [...scholarships];
    scholarshipsTemporary.push(scholarship);

    setScholarships(scholarshipsTemporary);
  };

  return (
    <>
      {scholarships.map((sch, index) => (
        <>
          <div
            className={style.wrapperInput}
            key={index + Math.random() * 1000}
          >
            <InputSelect
              name="type_scholarship"
              label="Jenis Beasiswa"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name="year_start"
              label="Tahun Mulai"
              placeholder="......"
              register={register}
            />
            <InputSelect
              name="year_finish"
              label="Tahun Selesai"
              placeholder="......"
              register={register}
            />
          </div>
          <TextArea
            name="description"
            label="Keterangan"
            placeholder="......"
            register={register}
          />
          <br />
          <Button bg="danger" size="sm" onClick={handleAddScholarship}>
            <MdDelete className="text-[1.4em]" />
            Delete Beasiswa
          </Button>
          <br />
          <br />
        </>
      ))}
      <Button bg="primary" size="sm" onClick={handleAddScholarship}>
        <BsPlusCircleFill />
        Tambah Beasiswa
      </Button>
    </>
  );
};

export default Form4;
