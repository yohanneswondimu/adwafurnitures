import React from 'react';
import { InView } from 'react-intersection-observer'; // Import for detecting when sections come into view
import './App.css';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Navbar from './Navbar';
import Products from './Products';
import Team from './Team';
import Footer from './Footer';
import Testimonial from './Testimonial';

function App() {
  // Render a section with InView detection
  const renderSection = (id, Component) => (
    <InView triggerOnce={true} threshold={0.5}>
      {({ inView, ref }) => (
        <div id={id} className={`section ${inView ? 'animate' : ''}`} ref={ref}>
          <Component />
        </div>
      )}
    </InView>
  );

  return (
    <div className="app">
      <Navbar />

      <div className="sections">
        {renderSection('hero', Hero)}
        {renderSection('about', About)}
        {renderSection('products', Products)}
        <div id="testimonial" className="section">
          <Testimonial />
        </div>
        {renderSection('team', Team)}
        {renderSection('contact', Contact)}
        {renderSection('footer', Footer)}
      </div>
    </div>
  );
}

export default App;


/*
import { InView } from 'react-intersection-observer'; // Import for detecting when sections come into view
import './App.css';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Navbar from './Navbar';
import Products from './Products';
import Team from './Team';
import Footer from './Footer';
import Testimonial from './Testimonial';

function App() {
  // Render a section with InView detection
  const renderSection = (id, Component) => (
    <InView triggerOnce={true} threshold={0.5}>
      {({ inView, ref }) => (
        <div id={id} className={`section ${inView ? 'animate' : ''}`} ref={ref}>
          <Component />
        </div>
      )}
    </InView>
  );

  return (
    <div className="app">
      <Navbar />

      <div className="sections">
        {renderSection('hero', Hero)}
        {renderSection('about', About)}
        {renderSection('products', Products)}
        {renderSection('testimonial', Testimonial)} {/* Wrap Testimonial with InView 
        {renderSection('team', Team)}
        {renderSection('contact', Contact)}
        {renderSection('footer', Footer)}
        
      </div>
    </div>
  );
}

export default App;*/