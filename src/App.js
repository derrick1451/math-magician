/** @format */

import { Routes, Route } from 'react-router-dom';
import Calculator from './module/Calculator';
import Quote from './module/Fetch';
import Home from './module/Home';
import NotMatch from './module/noMatch';
import Layout from './module/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
