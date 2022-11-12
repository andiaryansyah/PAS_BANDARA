import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasBandara from './pages/PasBandara';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PasBandara />}/>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
