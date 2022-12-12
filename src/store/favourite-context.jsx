import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourite: [],
  total: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export const FavouriteContextProvider = ({ children }) => {
  const [userFavourite, setUserFavourite] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    return setUserFavourite((prevFavourite) => [
      ...prevFavourite,
      favouriteMeetup,
    ]);
  };

  const removeFavouriteHandler = (meetupId) => {
    return setUserFavourite((prevUserFavourite) =>
      prevUserFavourite.filter((item) => item.id !== meetupId)
    );
  };

  const itemIsFavouriteHandler = (meetupId) => {
    return userFavourite.some((item) => item.id === meetupId);
  };

  const context = {
    favourite: userFavourite,
    totalFavourite: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  return (
    <FavouriteContext.Provider value={context}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
