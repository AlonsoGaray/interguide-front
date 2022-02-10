import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Layout.scss';

const App = () => (
  <>
    <Header />
    <div className="page-content">
      <Outlet />
      {/* <Footer /> */}
    </div>
  </>
);
export default App;
