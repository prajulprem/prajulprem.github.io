import Sidebar from './sideBar';
import Navbar from './navBar';

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  </div>
);

export default Layout;
