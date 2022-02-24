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
import ComingSoon from './components/ComingSoon/ComingSoon';
// import Quiz from './components/Quiz/Quiz';
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
            {/* Start Left Home */}
            <Route path="" element={<RecentQuestions />} />
            <Route path="companies" element={<Companies />} />
            <Route path="questions" element={<Questions />} />
            <Route path="tags" element={<Tags />} />
            {/* End Left Home */}

            {/* Start Question Detail */}
            <Route path="question">
              <Route path=":id" element={<QuestionDetail />} />
            </Route>
            {/* End Question Detail */}
          </Route>
          {/* End Home */}

          {/* Start Mi Perfil */}
          <Route path="/mi-perfil/" element={<MiPerfil />}>
            <Route path="" element={<Activity />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* End Mi Perfil */}
        </Route>

        {/* Coming Soon */}
        <Route path="about" element={<ComingSoon page="About" />} />
        <Route path="contact-us" element={<ComingSoon page="Contact Us" />} />
        <Route path="contribute" element={<ComingSoon page="Contribute" />} />
        <Route
          path="privacy-policy"
          element={<ComingSoon page="Privacy Policy" />}
        />
        {/* Coming Soon */}
        {/* <Route path="/quiz" element={<Quiz />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
