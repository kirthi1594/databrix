import React from 'react';

const Home: React.FC = () => {
  return <div>
    <header className="w-screen h-screen bg-cover bg-no-repeat bg-gradient-to-t from-blue-800 via-blue-400 to-cyan-200" style={{ backgroundImage: 'url("https://www.pathwaysinternational.com/wp-content/uploads/2018/06/Big-data-analytics-solutions.jpg")' }}>
      <div className="flex justify-between items-center p-5 text-white gap-5">
        <h1 className="text-5xl flex items-center">
          <img className="w-12 h-12 mr-2" src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-electronics-logo-template-wijreja93ac5d3.webp" alt="Logo" />
          Databrix
        </h1>
        <div className="w-1/3 bg-sky-400 bg-opacity-40 p-2 text-black text-lg font-bold">
          <h2>About Us</h2>
          <p className="my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            ducimus reiciendis voluptatem fugit facere unde ipsum nostrum
            voluptates quod sequi quos nisi vel dolorem, soluta quaerat.
            Voluptatum minus placeat dolor. Id ipsum ratione repellat ut eius
            incidunt pariatur fugiat atque porro repudiandae, nisi, reiciendis
            illo numquam qui sapiente facere aperiam minus magni. Rerum impedit
            quibusdam, deserunt ratione qo dignissimos tempore repellat aut ab.
            Magnam, iste laboriosam?
          </p>
          
        </div>
      </div>
    </header>
  
  </div>;
};

export default Home;
