import { FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

//we get the navigation prop becaus this comp has regestred as screen
function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
   const pressHandler = ()=>{
  navigation.navigate("MealsOverview", {
    categoryId: itemData.item.id,
  });
   }
    return (
      <CategoryGridTile 
      title={itemData.item.title}
       color={itemData.item.color} 
       onPress={pressHandler}
       />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;