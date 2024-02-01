import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
//screens
import MealsOverviewScreen  from "./screens/MealsOverviewScreen";
 import MealDetailScreen from "./screens/MealDetailScreen";
 import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
//function for drwaer navigator
function DrawerNavigator(){
return (
  <Drawer.Navigator
    screenOptions={{
      // drawerposition:'right',
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1",
    }}
    //*/*/*/*/*/*/*/*/
    //change drawer direction
    ///*/*/*/*/*/*/*/*/*
    // screenOptions={{
    //   drawerPosition: "right",
    //   // headerShown: false,
    //   drawerStyle: { right: 0 },
    //   sceneContainerStyle: { backgroundColor: "#3f2f25" },
    //   headerTintColor: "white",
    //   headerStyle: { backgroundColor: "#351401" },
    // }}
  >
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen name="Favorites" component={FavoritesScreen}
     options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
    />
  </Drawer.Navigator>
);
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="MealCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
            //this is before we added the drawer navigation

            // name="MealCategories"
            // component={CategoriesScreen}
            // options={{
            //   title: "All Categories",
            // }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title:'About The Meal'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
