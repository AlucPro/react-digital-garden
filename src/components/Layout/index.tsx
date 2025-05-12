import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
     <div className='layout'>
        <div className='layout-content'>
        <div className='header'>
            <Header />
        </div>
        <div className="body">
            <Outlet />
        </div>
        <Footer />
        </div>
    </div>
    
  );
};

export default Layout;