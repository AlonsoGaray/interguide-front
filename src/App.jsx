import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Activity from './components/PerfilRight/Activity';
import Settings from './components/PerfilRight/Settings';
import Home from './pages/Home/Home';
import RecentQuestions from './components/RecentQuestions/RecentQuestions';
import Tags from './components/Tags/Tags';
import Questions from './components/Questions/Questions';
import Companies from './components/Companies/Companies';
import PostQuestion from './pages/PostQuestion/PostQuestion';
import QuestionDetail from './components/QuestionDetail/QuestionDetail';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Start Post Question */}
          <Route path="/post-question" element={<PostQuestion />} />
          {/* End Post Question */}
          {/* Start Home */}
          <Route path="" element={<Home />}>
            <Route path="" element={<RecentQuestions />} />
            <Route path="questions" element={<Questions />} />
            <Route path="companies" element={<Companies />} />
            <Route path="tags" element={<Tags />} />
            {/* Start Question */}
            <Route path="question">
              <Route path=":id" element={<QuestionDetail />} />
            </Route>
            {/* Start Question */}
          </Route>
          {/* Start Home */}
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
