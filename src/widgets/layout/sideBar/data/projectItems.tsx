import { NavItem } from "../types";
import { FolderIcon, ListIcon, TableIcon } from "@/shared/icons";

export const projectItems: NavItem[] = [
  {
    icon: <FolderIcon />,
    name: "Project List",
    subItems: [
      { name: "참여중인 프로젝트", path: "/projects/ongoing", ongoing: true },
      { name: "참여한 프로젝트",   path: "/projects/participated" },
    ],
  },
  {
    icon: <ListIcon />,
    name: "Consortium List",
    subItems: [
      { name: "참여중인 컨소시엄", path: "/projects/consortium/ongoing", ongoing: true },
      { name: "참여한 컨소시엄",   path: "/projects/consortium/participated" },
    ],
  },
  {
    icon: <TableIcon />,
    name: "Contract & Settlement List",
    path: "/projects/contracts",
  },
];