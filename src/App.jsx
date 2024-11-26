import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Exam from './pages/exam/Exam';
import ExamResult from './pages/ExamResult/ExamResult';

import { 
  Outlet 
} from 'react-router-dom'

const App = () => {
  return (
    <div 
      className="App-container" 
      style={{
        background: "rgb(196,236,247)",
        background: "linear-gradient(90deg, rgba(196,236,247,1) 20%, rgba(164,216,248,1) 33%, rgba(211,221,247,1) 100%)"
      }}
    >
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
