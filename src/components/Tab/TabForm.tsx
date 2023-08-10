// Type
import { TabFormPPDB } from '../../Types/Index';

// Component
import Button from '../../Button';
import TabItem from './TabItem';

const TabsForm: React.FC<TabFormPPDB> = ({
  tabs,
  currentTab,
  setCurrentTab,
}) => {
  const handleClickTab = (id: number) => {
    setCurrentTab(id);
  };

  return (
    <div className="h-[4em] flex items-end mb-8 px-4 bg-[#F9F9F9] rounded-tl-[0.675em] rounded-tr-[0.675em] overflow-x-scroll pb-0.5">
      {tabs.map((tab, i) => (
        <TabItem
          key={i}
          tab={tab}
          currentTab={currentTab}
          handleClick={() => handleClickTab(tab.id)}
          isActive={currentTab == tab.id}
        />
      ))}
    </div>
  );
};

export default TabsForm;
