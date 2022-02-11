import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Activity from './components/PerfilRight/Activity';
import Settings from './components/PerfilRight/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/mi-perfil/" element={<MiPerfil />}>
            <Route path="" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
