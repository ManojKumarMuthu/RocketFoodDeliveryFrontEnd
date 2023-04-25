// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HeaderComponent = ({ navigation }) => {

//   // function to handle the logout button press
//   const handleLogout = async () => {
//     try {
//       // remove the user's token from async storage
//       await AsyncStorage.removeItem('userToken');
//       // navigate to the login screen
//       navigation.navigate('Login');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.header}>
//       <Text style={styles.headerText}>Rocket Food Delivery</Text>
//       <TouchableOpacity onPress={handleLogout}>
//         <Text style={styles.logoutButton}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Header = ({ navigation }) => {
//   return (
//     <View>
//       <Text onPress={() => navigation.navigate('Login')}>Go to Login</Text>
//     </View>
//   );
// };

// export { Header, HeaderComponent };

// const styles = StyleSheet.create({
//   header: {
//     height: 80,
//     paddingTop: 40,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   logoutButton: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'red',
//     marginRight: 10,
//   },
// });

// export default HeaderComponent;



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppLogoV2 from '../../assets/AppLogoV2.png'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const handleLogout = () => {
    // Perform log out logic here, e.g. clearing user data, making API calls, etc.

    // Navigate back to the login screen
    navigation.navigate('Login'); // Replace 'Login' with the name of your login screen component
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image source={AppLogoV2} style={styles.logo} resizeMode={"contain"} /> 
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: 'lightgray',
  },
  headerLeft: {
    flex: 1,
    marginRight: 16,
  },
  headerRight: {
    
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoutButton: {
    backgroundColor: '#DA583B', 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderRadius: 4, 
  },
  logoutButtonText: {
    color: 'white', 
    fontWeight: 'bold', 
  },
  
});
