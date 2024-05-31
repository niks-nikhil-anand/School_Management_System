import NavbarAdmin from "@/app/component/Dashboard/NavbarAdmin";
import { SidebarAdmin } from "@/app/component/Dashboard/SidebarAdmin";
const Layout = ({ children }) => {
  return (
        <div>
          <div>
          <NavbarAdmin />
          </div>
          <div className="flex bg-gray-100">
            <SidebarAdmin className="w-1/4" />
              {children}
          </div>
        </div>
  );
}

export default Layout;
