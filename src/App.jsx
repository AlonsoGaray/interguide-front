import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Activity from './components/PerfilRight/Activity';
import Settings from './components/PerfilRight/Settings';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}>
            <Route path="questions" />
            <Route path="companies" />
            <Route path="tags" />
          </Route>
          {/* Start Mi Perfil */}
          <Route path="/mi-perfil/" element={<MiPerfil />}>
            <Route path="" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* End Mi Perfil */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
