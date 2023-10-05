import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRatingString, cuisines, costForTwo} = resData?.info;
    // console.log(resData)
    return (
        <div className='res-card'>
        <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString} Star</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;