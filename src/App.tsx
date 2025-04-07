import {  Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Post from './pages/Post';
import About from './pages/About';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />           {/* 首页 */}
          <Route path="posts/:id" element={<Post />} /> {/* 文章详情页 */}
          <Route path="about" element={<About />} />   {/* 关于页 */}
        </Route>
      </Routes>
  );
}

export default App;