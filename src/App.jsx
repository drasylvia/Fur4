import React from 'react';
import Features from './Screens/feature';
import Footer from './Screens/footer';
import Hero from './Screens/hero';
import Info from './Screens/info';
import Pets from './Screens/pets';
import ProductView from './Screens/poduct';
import Video from './Screens/video';
import Header from './Screens/header';
import ProductVersion2 from './Screens/product_version2';

function App() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Pets />
      <Video />
      {/* <ProductView /> */}
      <ProductVersion2 />
      <Features />
      <Info />
      <Footer />
    </main>
  );
}

export default App;
