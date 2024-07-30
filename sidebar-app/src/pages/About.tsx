import React from 'react';
import ImageGrid from '../ImageGrid';

const About: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center font-sans text-gray-700">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <ImageGrid />
    </div>
  );
};

export default About;
