import { NavItem } from "../types";
import { FolderIcon, ListIcon, TableIcon } from "@/shared/icons";

export const operationItems: NavItem[] = [
  {
    icon: <FolderIcon />,
    name: "Project List",
    subItems: [
      { name: "참여중인 프로젝트", path: "/project/ongoing", ongoing: true },
      { name: "참여한 프로젝트",   path: "/project/participated" },
    ],
  },
  {
    icon: <ListIcon />,
    name: "Consortium List",
    subItems: [
      { name: "참여중인 컨소시엄", path: "/consortium/ongoing", ongoing: true },
      { name: "참여한 컨소시엄",   path: "/consortium/participated" },
    ],
  },
  {
    icon: <TableIcon />,
    name: "Contract & Settlement List",
    path: "/contracts",
  },
];