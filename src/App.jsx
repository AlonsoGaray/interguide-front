import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Activity from './components/PerfilRight/Activity';
import Settings from './components/PerfilRight/Settings';
import Home from './pages/Home/Home';
import TopQuestions from './components/TopQuestions/TopQuestions';
import Tags from './components/Tags/Tags';
import Questions from './components/Questions/Questions';
import Companies from './components/Companies/Companies';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}>
            <Route path="" element={<TopQuestions />} />
            <Route path="questions" element={<Questions />} />
            <Route path="companies" element={<Companies />} />
            <Route path="tags" element={<Tags />} />
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
