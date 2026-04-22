export type ClientPortalAccount = {
  id: string;
  name: string;
  phone: string;
  email: string;
  passcode: string;
  company: string;
};

export const clientPortalAccounts: ClientPortalAccount[] = [
  {
    id: "client-001",
    name: "Mahin Rahman",
    phone: "+8801711000001",
    email: "mahin@commerce-tower.example",
    passcode: "2417",
    company: "Sylhet Commerce Tower",
  },
  {
    id: "client-002",
    name: "Farzana Islam",
    phone: "+8801711000002",
    email: "farzana@lakeview.example",
    passcode: "4023",
    company: "Lakeview Residences",
  },
];
