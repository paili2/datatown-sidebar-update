import { NavItem } from "../types";
import { GroupIcon, UserCircleIcon } from "@/shared/icons";

export const managementItems: NavItem[] = [
  {
    icon: <GroupIcon />,
    name: "Organization",
    subItems: [
      { name: "직원 관리", path: "/managements/org/employees" },
      { name: "회사 관리", path: "/managements/org/company" },
    ],
  },
  {
    icon: <UserCircleIcon />,
    name: "Internal Admins",
    subItems: [
      { name: "관리자 관리", path: "/managements/admins/users" },
      { name: "파트너사 관리", path: "/managements/admins/partners" },
    ],
  },
];