import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Index from './layout/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />}>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
