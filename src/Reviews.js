import React from 'react';
import './App.css';

function Reviews() {
    // mempersiapkan data dummy JSON
    const users = [
      {
        "id": 1,
        "name": "Rena",
        "review": "Bagus kualitasnya",
        "src":"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
  
      },
      {
        "id": 2,
        "name": "Siti",
        "review": "Bagus sepatunya dan kualitasnya original LHO!!",
        "src":"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  
      },
      {
        "id": 3,
        "name": "Kartini",
        "review": "Harganya murah dan kualitasnya oke!",
        "src":"https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  
      }
    ];
    const listReview = users.map((itemReview) =>
      <div key={itemReview.id} className="Item">
        <img src= {itemReview.src} alt="user" />
        <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
    return(
      <div className="Review-box">
          <h2>Reviews</h2>
          {listReview}
        </div>
    )
  }

  export default Reviews;