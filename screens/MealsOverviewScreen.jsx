import { useLayoutEffect } from "react";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealList";
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

  return (
     <MealsList items={displayedMeals} />
  );
}
export default MealsOverviewScreen;