import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://media.istockphoto.com/id/1278998606/photo/fresh-homemade-pizza-margherita.jpg?b=1&s=612x612&w=0&k=20&c=9d3lQQAw4HMRQ-9KnYcRW0IhOFoigggTvEFKb8UlPXQ="alt='' className="w-full h-5/6" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"alt='' className="w-full h-5/6" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI="alt='' className="w-full h-5/6" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"alt='' className="w-full h-5/6" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;