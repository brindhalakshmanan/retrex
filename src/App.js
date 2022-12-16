import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/homePage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <HomePage/>
      {/* <Routes>
        <Route path='/homepage' element={<HomePage/>} exact/>
      </Routes> */}
    </div>
  );
}

export default App;
