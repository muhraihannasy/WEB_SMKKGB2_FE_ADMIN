interface FormPPDB {
  register: any;
}

interface TabFormPPDB {
  currentTab: number;
  setCurrentTab: (val: number) => void;
}

interface FormValue {
  email: string;
  password: string;
}

export type { TabFormPPDB, FormPPDB, FormValue };
