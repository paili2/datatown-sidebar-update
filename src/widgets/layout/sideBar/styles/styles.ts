import { useSidebarStore } from "../hooks/useSidebarStore"
import { isDesktopSidebarOpen, isSidebarOpen } from "../utils/sidebarUtils";

export function useSidebarClasses() {
 const {isMobileOpen,isExpanded,isHovered} = useSidebarStore();
 const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
const sidebarOpen  = isSidebarOpen(desktopOpen, isMobileOpen);

 const sidebarSlideClass  = isMobileOpen ? "translate-x-0" : "-translate-x-full"

 const widthClass  = sidebarOpen ? "w-[290px]" : "w-[90px]"
            
 const baseClass = "fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200"

    return {sidebarSlideClass,widthClass,baseClass}

}