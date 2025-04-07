import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Outlet /> {/* 渲染具体页面内容 */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;