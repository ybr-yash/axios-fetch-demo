import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AxiosComponent from './axios-demo/AxiosComponent';
import FetchComponent from './fetch-demo/FetchComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AxiosComponent/>}/>
          <Route path='fetch' element={<FetchComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
