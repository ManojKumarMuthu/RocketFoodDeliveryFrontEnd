import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppLogoV2 from '../../assets/AppLogoV1.png'
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderHistory')}>
          <Text style={styles.buttonText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Restaurant</Text>
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
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: '#DA583B', 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderRadius: 4,
    marginRight: 8,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
  },
});



// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, useNavigation  } from 'react-native';
// import AppLogoV2 from '../../assets/AppLogoV1.png'

// export default function Header() {
//   // const navigation = useNavigation();
//   // const handleLogout = () => {
//   //   // Perform log out logic here, e.g. clearing user data, making API calls, etc.

//   //   // Navigate back to the login screen
//   //   navigation.navigate('Login'); // Replace 'Login' with the name of your login screen component
//   // };
//   return (
//     <View style={styles.headerContainer}>
//       <View style={styles.headerLeft}>
//         <Image source={AppLogoV2} style={styles.logo} resizeMode={"contain"} /> 
//       </View>
//       <View style={styles.headerRight}>
//         <TouchableOpacity style={styles.logoutButton}>
//           <Text style={styles.logoutButtonText}>Log Out</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
//       const styles = StyleSheet.create({
//         headerContainer: {
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingHorizontal: 16,
//           height: 60,
//           backgroundColor: 'lightgray',
//         },
//         headerLeft: {
//           flex: 1,
//           marginRight: 16,
//         },
//         headerRight: {
          
//         },
//         logo: {
//           width: 100,
//           height: 100,
//         },
//         logoutButton: {
//           backgroundColor: '#DA583B', 
//           paddingVertical: 8, 
//           paddingHorizontal: 16, 
//           borderRadius: 4, 
//         },
//         logoutButtonText: {
//           color: 'white', 
//           fontWeight: 'bold', 
//         },
        
//       });