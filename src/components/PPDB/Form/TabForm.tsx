// Type
import { TabFormPPDB } from '../../../Types/Index';

// Component
import Button from '../../Button';

const TabsForm: React.FC<TabFormPPDB> = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap flex items-center gap-2 mb-8 pb-1">
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(1)}
        active={currentTab == 1 ?? false}
      >
        Akun Murid
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(2)}
        active={currentTab == 2 ?? false}
      >
        Data Murid
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(3)}
        active={currentTab == 3 ?? false}
      >
        Data Orang Tua/Wali
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(4)}
        active={currentTab == 4 ?? false}
      >
        Beasiswa
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(5)}
        active={currentTab == 5 ?? false}
      >
        Prestasi
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(6)}
        active={currentTab == 6 ?? false}
      >
        Registrasi
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(7)}
        active={currentTab == 7 ?? false}
      >
        Berkas
      </Button>
      <Button
        size="md"
        bg="tertiary"
        onClick={() => setCurrentTab(8)}
        active={currentTab == 8 ?? false}
      >
        Optinal
      </Button>
    </div>
  );
};

export default TabsForm;
