import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailScreen from "../screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();


export default function AppNavigator(){
    return (
        <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown : false}}>
              <Stack.Screen name="Welcome" component={WelcomeScreen}/>
              <Stack.Screen name="RecipeList" component={RecipeListScreen}/>
              <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}