import NavAdminComponent from "@/components/NavAdminComponent";
import SidebarComponent from "@/components/SidebarComponent";

const CustomLayout = ({ children }) => {
    return (
      <>
      <NavAdminComponent />
      <div className="flex gap-8">
        <SidebarComponent />
        <div className="flex-[8] p-4 rounded min-h-[300px]">
          {children}
        </div>
      </div>
      </>
      
    );
  };
  
  export default CustomLayout;