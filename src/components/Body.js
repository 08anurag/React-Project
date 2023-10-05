import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    useEffect(()=>{fetchData();},[])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4326217&lng=81.83029049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json(); 
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants||json?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    return listOfRestaurant.length == 0 ? <Shimmer/> : (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}/>
                    <button onClick={()=>{}}>Search</button>
                </div>
                <button className="filter-btn"
                onClick = {()=> {
                    const filteredRestaurant = listOfRestaurant.filter((res)=> (
                        res.info.avgRating>4
                    ))
                    setListOfRestaurant(filteredRestaurant);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {listOfRestaurant.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>
                ))}
                
            </div>
        </div>
    )
}

export default Body;