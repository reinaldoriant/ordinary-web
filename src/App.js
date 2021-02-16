import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo isDiscount="yes" name="Adidas Yeezy Boost 350 V2 Cinder" category="Lifestyle"/>
    </div>
  );
}

function FotoProduk(){
  return(
    <div className="Foto">
      <img src="yeezy-white.jpg" alt="shoes"/>
    </div>
  );
}

function CheckDiscount(props){
  const { isDiscount } = props;
  if(isDiscount === "yes"){
    return (
      <p>Diskon 50% off</p>
    );
  }
  else if(isDiscount ==="coming") {
    return(
      <p>Akan ada diskon ...</p>
    );
  }
  else
  {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(proops){
  const {category, name, isDiscount} =proops;
  const price = 320;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Bahan lentur","Tahan lama", "Bahan kuat", "Original 100%"];
  const listBenefits = benefits.map((itemBenefit)=>
    <li key={itemBenefit}>{itemBenefit}</li>
  );
   return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Tittle">{name}</h1>
        <p className="Price">$ {price}</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="Info">
          Yeezy adds another colorway of its most popular design with the adidas Yeezy 350 Cinder, now available on Shoes Room. 
          This 350 V2 stays true to Yeezy’s signature palette, sporting dark earth tones that provide a natural feeling. 
          This Yeezy 350 V2 is composed of a cinder Primeknit upper with a tonal side stripe. 
          A cinder Boost cushioned midsole sole and gold outsole completes the design. These sneakers released in March of 2020 and retailed for $220.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) =>TambahCart(name,e)} href="#addcart">Add to Cart</a>
      </div>
    </div>
    );
}

function TambahCart(e){
  return console.log("Membeli Produk ..." +e)
}
export default App;
