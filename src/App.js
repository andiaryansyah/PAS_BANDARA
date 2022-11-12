import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PasBandara from './pages/PasBandara';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PasBandara />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
