import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard =() =>{
  return(
    <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="restaurant-logo"
      alt="" 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"></img>
      <h3>Meghana Foods</h3>
      <h4>Biryani,South India, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () =>{
  return(
    <div className="body">
    <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
      </div>
    
  </div>
  )
  
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
