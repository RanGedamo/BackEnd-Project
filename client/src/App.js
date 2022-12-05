import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/features/Header/Header';
import Routing from './Routing';
import Footer from './component/features/Footer/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header bol={localStorage.getItem("user")?true:false}/>
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
