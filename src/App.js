
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PopularProperties from './components/popularProperties/PopularProperties';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import Properties from './components/properties/Properties';
import PropertyDetail from './components/propertyDetail/PropertyDetail';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Hero from './components/hero/Hero';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar/>
          <Hero/>
          <PopularProperties/>
          <FeaturedProperties/>
          <Newsletter/>
          <Footer/>

          </>
        } />
        
        <Route path='/properties' element={
          <>
            <Navbar/>
            <Properties/>
            <Footer/>
          </>
        } />
        <Route path='/propertyDetail/:id' element={
          <>
            <Navbar/>
            <PropertyDetail/>
            <Footer/>
          </>
        } />
        <Route path='/signup' element={<Signin/>} />
        <Route path='/signin' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
