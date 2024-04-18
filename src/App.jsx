/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
// import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import OurTeam from './components/OurTeam/OurTeam';
import Team from './components/Team/Team';
import Services from './components/Services/Services';

const App = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Hero />
        <div className='container'>
          <Title
            subtitle='Our Programs'
            title='What we offer'
          />

          <Services />
          {/* <Programs /> */}
          <About setVideoPlay={setVideoPlay} />
          <Title
            subtitle='our team'
            title='The Team Behind TechElevate'
          />
          <OurTeam />

          <Title
            subtitle='Testimonials'
            title='What Student Says'
          />
          <Team />
          {/* <Testimonials /> */}

          <Title
            subtitle='Contact us'
            title='Get in Touch'
          />
          <Contact />
          <Footer />
        </div>
        <VideoPlayer
          videoPlay={videoPlay}
          setVideoPlay={setVideoPlay}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
