import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'React';
import Layout from '@/layout';
import Home from '@/views/home';

import NotFound from '@/views/404';
import Life from '@/views/life';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="life" element={<Life />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default routes;
