import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/products/Products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/banner/Banner';
import Subscribe from './components/Subscribe.jsx/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
    </div>
  )
}

export default App
