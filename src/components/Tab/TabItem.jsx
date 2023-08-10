const TabItem = ({ tab, isActive, handleClick }) => {
  const style = {
    tabItem: `h-[2.8em] px-[1.7em] rounded-tl-[0.675em] rounded-tr-[0.675em] mr-2 whitespace-nowrap font-medium transition-all ${
      isActive ? 'bg-meta-4 text-white' : 'bg-white'
    }`,
  };

  return (
    <button className={style.tabItem} onClick={handleClick}>
      {tab.name}
    </button>
  );
};

export default TabItem;
