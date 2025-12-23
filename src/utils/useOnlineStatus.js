import { useEffect,useState } from "react";

const useOnlineStatus = () => {
  //try to implement a custom hook which returns online status true/false

  const [OnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return OnlineStatus;
};

export default useOnlineStatus;
