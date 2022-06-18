import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds((prevFavIds) => [...prevFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteIds((prevFavIds) =>
      prevFavIds.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
