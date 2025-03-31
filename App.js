import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// screens
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{ title: 'About the meal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {},
});
