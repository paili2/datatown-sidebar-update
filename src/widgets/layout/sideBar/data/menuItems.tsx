import { GridIcon, ListIcon, PageIcon, TableIcon, UserCircleIcon } from "@/shared/icons";
import { NavItem } from "../types";

export const menuItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
    // subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  { name: "Partners",
    icon: <UserCircleIcon />,
    subItems: [
      { name: "파트너사 리스트", path: "/list" },
      { name: "우리 회사 상세 페이지", path: "/our-company" },
    ],
  },
   {
    icon: <PageIcon />,
    name: "K-Resources",
    subItems: [
      { name: "K-Resources 리스트", path: "/k-resources/list" },
      { name: "우리 회사 K-Resources", path: "/k-resources/our-offerings"},
    ],
  },
];