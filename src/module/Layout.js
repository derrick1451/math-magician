import { Outlet } from 'react-router-dom';
import Navbar from './navBar';

function Layout() {
  return (
    <div className="wrap">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default Layout;
