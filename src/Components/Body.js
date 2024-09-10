import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
export const Body = () => {
  const [ListOfRestaurants,setListOfRestaurants] =useState(resList);

  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.966897&lng=77.6546863&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
   setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
 
   
    
    
 

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredRestaurants = ListOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.4
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {ListOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resdata={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
