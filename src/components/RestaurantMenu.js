import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  //data.cards[2].card.card.info.name
  //data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  //data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  const { itemCards = [] } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(resInfo);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      {/* categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card?.card?.title}
          data={category.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
