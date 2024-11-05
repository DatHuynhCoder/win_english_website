import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Exam from './pages/exam/Exam';
import ExamResult from './pages/ExamResult/ExamResult';

import { 
  Outlet 
} from 'react-router-dom'

const App = () => {
  return (
    <div className="App-container">
      <div className="Header-container">
        <Header/>
      </div>
      <div className="Main-content">
        <Outlet/>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
      <div>
        <Exam />
      </div>
    </div>
  );
}

export default App;
