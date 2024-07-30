import React from 'react';

const ImageGrid: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img
        className="max-w-full"
        src="https://www.databricks.com/en-website-assets/static/a4e1c255dc6579d5f944bb9a36f72fa6/24877.png"
        alt="img"
        loading="lazy"
        style={{ width: '70%' }}
      />
    </div>
  );
};

export default ImageGrid;
