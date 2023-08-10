interface Scholarship {
  id: string;
  type_scholarship: string;
  year_start: string;
  year_finish: string;
  description: string;
}

interface Achievement {
  id: string;
  name: string;
  type: string;
  year: string;
  level: string;
  organizer: string;
}

interface FormPPDB {
  register: any;
}

interface Tabs {
  id: number;
  name: string;
}

interface TabFormPPDB {
  tabs: Tabs[];
  currentTab: number;
  setCurrentTab: (val: number) => void;
}

interface FormValue {
  email: string;
  password: string;
  scholarships: Scholarship[];
  achievements: Achievement[];
}

export type { TabFormPPDB, FormPPDB, FormValue };
