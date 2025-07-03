import { SidebarConfigList } from "../types";
import { general } from "./general";

import { managementItems } from "./managementItems";

import { operationItems } from "./operations";


export const sidebarConfig:SidebarConfigList =
 [
  { title: "menu", items: general, type: "General" },
  { title: "projects",     items: operationItems,    type: "Operations"},
  { title: "managements",  items: managementItems, type: "Managements" },
  ];