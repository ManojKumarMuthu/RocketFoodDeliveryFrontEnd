// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import your screen components
// import HomeScreen from './src/screens/HomeScreen';
// import LoginScreen from './src/screens/LoginScreen';

// // Define your navigation stack
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//         <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: () => <Header navigation={navigation} />,
//     }}
//   />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RestaurantMenu from './src/screens/RestaurantMenu';
import OrderHistory from './src/screens/OrderHistory';
import AccountCourier from './src/screens/AccountCourier';
import UserPages from './src/screens/UserPages';

// Define your navigation stack
const Stack = createStackNavigator();

// Define your Header component
function Header({ navigation }) {
  return (
    <View>

    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
        <Stack.Screen name="UserPages" component={UserPages} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
        <Stack.Screen name="AccountCourier" component={AccountCourier} options={{ headerTitle: () => <Header navigation={navigation} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

