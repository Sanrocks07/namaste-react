import { useEffect,useState } from "react";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);
  //fetch data from api

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      // "https://namastedev.com/api/v1/listRestaurantMenu/" + resId
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    );    

    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
