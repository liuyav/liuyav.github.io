import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'React';
import Layout from '@/layout';
import Home from '@/views/home';
import Life from '@/views/life';
import Blog from '@/views/blog';

import NotFound from '@/views/404';
import BlogDetail from '@/views/blog/detail';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="life" element={<Life />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/detail/:id" element={<BlogDetail />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default routes;
