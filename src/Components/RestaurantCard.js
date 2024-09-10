import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{
    const { resdata } = props
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
    } =resdata?.info
    return(
      <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
      <div >
        <img 
        className="restaurant-logo"
        alt="" 
        src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
      </div>
    );
  };
  export default RestaurantCard;