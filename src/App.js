import { Routes, Route } from 'react-router-dom';
import Calcultor from './module/calculator';
import Apps from './module/fetch';
import Home from './module/Home';
import NotMatch from './module/noMatch';
import Layout from './module/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Calculator" element={<Calcultor />} />
        <Route path="Quote" element={<Apps />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>

  );
}

export default App;
