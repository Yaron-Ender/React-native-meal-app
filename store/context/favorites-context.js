import { createContext,useState } from "react";

export const FavoritesContext = createContext();

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]); 
  function addFavoriteId(id){
 setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }  
function removeFavorite(id) {
  setFavoriteMealIds((currentFavIds) =>
    currentFavIds.filter((mealId) => mealId !== id)
  );
}
const value = {
  ids: favoriteMealIds, //state
  addFavorite: addFavoriteId, //function
  removeFavorite: removeFavorite, //function
};
  return(
<FavoritesContext.Provider value={value}>
    {children}
    </FavoritesContext.Provider>
)
    
}

export default FavoritesContextProvider;
