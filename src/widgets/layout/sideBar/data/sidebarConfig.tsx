import { SidebarConfigList } from "../types";
import { managementItems } from "./managementItems";
import { menuItems } from "./menuItems";
import { projectItems } from "./projectItems";

export const sidebarConfig:SidebarConfigList =
 [
  { title: "menu", items: menuItems, type: "General" },
  { title: "projects",     items: projectItems,    type: "Projects"},
  { title: "managements",  items: managementItems, type: "Managements" },
  ];