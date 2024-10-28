import Header from './components/Header/Header'

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

      </div>
    </div>
  );
}

export default App;
