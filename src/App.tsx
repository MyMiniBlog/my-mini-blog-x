import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/landing';
import SaveMyArticle from './components/article/save-my-article';
import MainLayout from './components/layout/main-layout';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
       <Route path="/layout" element={<MainLayout />} />
       <Route path="/new-article" element={<SaveMyArticle />} />
        </Routes>
      </Router>
      <MainLayout />
    </div>
  );
}

export default App;
