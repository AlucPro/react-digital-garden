import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({children}) => {
  return (
     <div className='layout'>
        <div className='layout-content'>
        <div className='header'>
            <Header />
        </div>
        <div className="body">
            {children}
        </div>
        <Footer />
        </div>
    </div>
    
  );
};

export default Layout;