import { View,FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({route,navigation}) {
    const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem)=>{
  //  return mealItem.categoryIds.includes(catId)
   return mealItem.categoryIds.indexOf(catId) >= 0 //if it is not -1
   });
   //set dynamic title to the screen based on thecategory that has been clicked
     useLayoutEffect(() => {
       const categoryTitle = CATEGORIES.find(
         (category) => category.id === catId
       ).title;

       navigation.setOptions({
         title: categoryTitle,
       });
     }, [catId, navigation]);
function renderMealItem(itemData){
 const item = itemData.item;
     const mealItemProps = {
      id:item.id,
       title: item.title,
       imageUrl: item.imageUrl,
       affordability: item.affordability,
       complexity: item.complexity,
       duration: item.duration,
     };
     return <MealItem {...mealItemProps} />;
}
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
