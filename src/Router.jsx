import { Route, Routes, useLocation } from 'react-router-dom'
import Ifome from './componets/projects/ifome'
import Donation from './componets/projects/donation'
import BookStore from './componets/projects/bookstore'
import Layout from './componets/layout/layout'
import LayoutMain from './componets/layout/layoutMain'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<>
        <Layout />
        <ScrollToTop />
      </>
      }>
        <Route path="/" element={<LayoutMain />}></Route>
        <Route path="/home" element={<LayoutMain />}></Route>
        <Route path="/about" element={<LayoutMain />}></Route>
        <Route path="/projects" element={<LayoutMain />}></Route>
        <Route path="/contact" element={<LayoutMain />}></Route>
        <Route path="/ifome" element={<Ifome />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/bookstore" element={<BookStore />}></Route>
      </Route>
    </Routes>
  )
}
export default Router