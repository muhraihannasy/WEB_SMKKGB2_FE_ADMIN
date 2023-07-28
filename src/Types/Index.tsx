interface Scholarship {
  id: string;
  type_scholarship: string;
  year_start: string;
  year_finish: string;
  description: string;
}

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
  scholarships: Scholarship[];
}

export type { TabFormPPDB, FormPPDB, FormValue };
