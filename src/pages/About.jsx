import React from 'react';
import ProfileCard from '../components/About/ProfileCard';
import Qualifications from '../components/About/Qualifications';
import Skills from '../components/About/Skills';

const About = () => {
  return (
    <div>
      <ProfileCard />
      <Qualifications />
      <Skills />
    </div>
  );
};

export default About;