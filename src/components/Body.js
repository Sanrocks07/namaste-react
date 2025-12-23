import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local state variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // https://corsproxy.io/?url=https://example.com
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();

    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    const newRestaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    newRestaurants[3].info.cloudinaryImageId =
      "27a03c452c983d1b90f36faa2cbc0b0a";

    // store in both states
    setAllRestaurants(restaurants);
    setListOfRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>🔴 Offline, Please check your internet connection!!</h1>;

  const handleSearch = () => {
    if (searchText.trim() === "") {
      // if search box empty, reset to all
      setListOfRestaurants(allRestaurants);
      return;
    }

    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setListOfRestaurants(filteredRestaurants);
  };

  const handleTopRated = () => {
    const filteredList = allRestaurants.filter((res) => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder=" Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* //if restaurant is promoted, use promoted card
            {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)} */}

            {/* Restaurant Grid */}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
