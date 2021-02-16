import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
     
    </div>
  );
}

function fotoProduct(){
  return(
    <div className="Foto">
      <img src="yeezy-white.jpg"/>
    </div>
  );
}

function product(){
  const category ="Lifestyle";
  const price = 320;
   return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Tittle">Adidas Yeezy Boost 350 V2 Cinder</h1>
        <p className="Price">$ {price}</p>
        <p className="Info">
          Yeezy adds another colorway of its most popular design with the adidas Yeezy 350 Cinder, now available on Shoes Room. 
          This 350 V2 stays true to Yeezy’s signature palette, sporting dark earth tones that provide a natural feeling.
          This Yeezy 350 V2 is composed of a cinder Primeknit upper with a tonal side stripe. 
          A cinder Boost cushioned midsole sole and gold outsole completes the design. These sneakers released in March of 2020 and retailed for $220.
        </p>
      </div>
    </div>
    );
}
export default App;
