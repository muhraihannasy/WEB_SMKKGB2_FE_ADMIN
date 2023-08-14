// ============= PPDB ============= //

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

interface FormPPDB {}

interface Tabs {
  id: number;
  name: string;
}

interface TabFormPPDB {
  tabs: Tabs[];
  currentTab: number;
  setCurrentTab: (val: number) => void;
}

// ============= PPDB ============= //

export type { TabFormPPDB, FormPPDB };
