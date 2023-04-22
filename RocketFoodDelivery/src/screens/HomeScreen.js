// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Picker } from 'react-native';
// import styles from './restaurantsScreen.styles';



// const restaurantImages = [
//   require('../../assets/Restaurants/cuisineGreek.jpg'),
//   require('../../assets/Restaurants/cuisineJapanese.jpg'),
//   require('../../assets/Restaurants/cuisinePasta.jpg'),
//   require('../../assets/Restaurants/cuisinePizza.jpg'),
//   require('../../assets/Restaurants/cuisineSoutheast.jpg'),
// ];

// export default function RestaurantsScreen() {
//   const [ratingFilter, setRatingFilter] = useState('select');
//   const [priceFilter, setPriceFilter] = useState('select');

//   const handleRatingFilter = (value) => {
//     setRatingFilter(value);
//   };

//   const handlePriceFilter = (value) => {
//     setPriceFilter(value);
//   };

//   const handleRestaurantClick = () => {
//     // navigate to restaurant menu/order page
//   };

//   const renderRestaurantCards = () => {
//     // replace with actual restaurant data
    
//     const restaurants = [
//       { name: 'Restaurant 1', rating: 4, price: '$$', image: restaurantImages[0] },
//       { name: 'Restaurant 2', rating: 3, price: '$', image: restaurantImages[1] },
//       { name: 'Restaurant 3', rating: 5, price: '$$', image: restaurantImages[2] },
//       { name: 'Restaurant 4', rating: 2, price: '$$$', image: restaurantImages[3] },
//       { name: 'Restaurant 5', rating: 4, price: '$$', image: restaurantImages[4] },
//     ];

//     const filteredRestaurants = restaurants.filter(
//       (restaurant) =>
//         (ratingFilter === 'select' || restaurant.rating.toString() === ratingFilter) &&
//         (priceFilter === 'select' || restaurant.price === priceFilter)
//     );

//     return filteredRestaurants.map((restaurant, index) => (
//       <TouchableOpacity key={index} style={styles.restaurantCard} onPress={handleRestaurantClick}>
//         <Image source={restaurant.image} style={styles.restaurantImage} />
//         <View style={styles.restaurantInfo}>
//           <Text style={styles.restaurantName}>{restaurant.name}</Text>
//           <Text style={styles.restaurantRating}>Rating: {restaurant.rating}</Text>
//           <Text style={styles.restaurantPrice}>Price: {restaurant.price}</Text>
//         </View>
//       </TouchableOpacity>
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <Picker
//           style={styles.filterPicker}
//           selectedValue={ratingFilter}
//           onValueChange={handleRatingFilter}
//         >
//           <Picker.Item label="Select Rating" value="select" />
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//           <Picker.Item label="4" value="4" />
//           <Picker.Item label="5" value="5" />
//         </Picker>
//         <Picker
//           style={styles.filterPicker}
//           selectedValue={priceFilter}
//           onValueChange={handlePriceFilter}
//         >
//           <Picker.Item label="Select Price" value="select" />
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//         </Picker>
//       </View>
//       <ScrollView style={styles.restaurantList}>{renderRestaurantCards()}</ScrollView>
//     </View>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import {Text,TouchableOpacity,View,Image,ScrollView,Picker,} from 'react-native';
// import styles from './restaurantsScreen.styles';

// const restaurantImages = [
//   require('../../assets/Restaurants/cuisineGreek.jpg'),
//   require('../../assets/Restaurants/cuisineJapanese.jpg'),
//   require('../../assets/Restaurants/cuisinePasta.jpg'),
//   require('../../assets/Restaurants/cuisinePizza.jpg'),
//   require('../../assets/Restaurants/cuisineSoutheast.jpg'),
// ];

// export default function RestaurantsScreen() {
//   const [ratingFilter, setRatingFilter] = useState('select');
//   const [priceFilter, setPriceFilter] = useState('select');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [restaurants, setRestaurants] = useState([]);
//   const [data, setData] = useState([]);

//   const handleRatingFilter = (value) => {
//     setRatingFilter(value);
//   };

//   const handlePriceFilter = (value) => {
//     setPriceFilter(value);
//   };

//   const handleRestaurantClick = () => {
//     // navigate to restaurant menu/order page
//   };

// //   useEffect(() => {
// //     setIsLoading(true);
// //     fetch('http://localhost:3000/api/restaurants/all')
// //   .then(response => {
// //     if (!response.ok) {
// //       throw new Error('Network response was not ok');
// //     }
// //     return response.json();
// //   })
// //   .then(data => {
// //     setData(data);
// //     setIsLoading(false);
// //     // process the data here
// //   })
// //   .catch(error => {
// //     console.error('Error fetching data:', error);
// //   })});
  
// useEffect(() => {
//     setIsLoading(true);
//     // fetch('http://localhost:3000/api/restaurants')
//     fetch(`http://localhost:3000/api/restaurants?price_range=${form.price_range}&rating=${form.rating}`)


//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setData(data);
//         setIsLoading(false);
//         // process the data here
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // add an empty array as the second argument to run this effect only once

//   const renderRestaurantCards = () => {
//     const filteredRestaurants = data.filter(
//       (restaurant) =>
//         // (ratingFilter === 'select' || restaurant.rating.toString() === ratingFilter) &&
//         (priceFilter === 'select' || restaurant.price_range === priceFilter)
//     );
  
//     return filteredRestaurants.map((restaurant, index) => (
//       <TouchableOpacity
//         key={index}
//         style={styles.restaurantCard}
//         onPress={handleRestaurantClick}
//       >
//         <Image source={restaurantImages[index]} style={styles.restaurantImage} />
//         <View style={styles.restaurantInfo}>
//           <Text style={styles.restaurantName}>{restaurant.name}</Text>
//           <Text style={styles.restaurantRating}>Rating: {restaurant.rating}</Text>
//           <Text style={styles.restaurantPrice}>Price: {restaurant.price_range}</Text>
//         </View>
//       </TouchableOpacity>
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <Picker
//           style={styles.filterPicker}
//           selectedValue={ratingFilter}
//           onValueChange={handleRatingFilter}
//         >
//           <Picker.Item label="Select Rating" value="select" />
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//           <Picker.Item label="4" value="4" />
//           <Picker.Item label="5" value="5" />
//         </Picker>
//         <Picker
//           style={styles.filterPicker}
//           selectedValue={priceFilter}
//           onValueChange={handlePriceFilter}
//         >
//           <Picker.Item label="Select Price" value="select" />
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//         </Picker>
//       </View>
//       <ScrollView style={styles.restaurantList}>{renderRestaurantCards()}</ScrollView>
//     </View>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { Text, TouchableOpacity, View, Image, ScrollView, Picker } from 'react-native';
// import styles from './restaurantsScreen.styles';

// const restaurantImages = [
//   require('../../assets/Restaurants/cuisineGreek.jpg'),
//   require('../../assets/Restaurants/cuisineJapanese.jpg'),
//   require('../../assets/Restaurants/cuisinePasta.jpg'),
//   require('../../assets/Restaurants/cuisinePizza.jpg'),
//   require('../../assets/Restaurants/cuisineSoutheast.jpg'),
// ];

// export default function RestaurantsScreen() {
//   const [ratingFilter, setRatingFilter] = useState('select');
//   const [priceFilter, setPriceFilter] = useState('select');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [restaurants, setRestaurants] = useState([]);
//   const [data, setData] = useState([]);

//   const handleRatingFilter = (value) => {
//     setRatingFilter(value);
//   };

//   const handlePriceFilter = (value) => {
//     setPriceFilter(value);
//   };

//   const handleRestaurantClick = () => {
//     // navigate to restaurant menu/order page
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     fetch('http://localhost:3000/api/restaurants')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setIsLoading(false);
//         setData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError(error);
//       });
//   }, []);
  
//   const filteredRestaurants = data.filter(
//     (restaurant) =>
//       (ratingFilter === 'select' || restaurant.rating.toString() === ratingFilter) &&
//       (priceFilter === 'select' || restaurant.price_range === priceFilter)
//   );
  
//     return filteredRestaurants.map((restaurant, index) => (
//       <TouchableOpacity
//         key={index}
//         style={styles.restaurantCard}
//         onPress={handleRestaurantClick}
//       >
//         <Image source={restaurantImages[index]} style={styles.restaurantImage} />
//         <View style={styles.restaurantInfo}>
//           <Text style={styles.restaurantName}>{restaurant.name}</Text>
//           <Text style={styles.restaurantRating}>Rating: {restaurant.rating}</Text>
//           <Text style={styles.restaurantPrice}>Price: {restaurant.price_range}</Text>
//         </View>
//       </TouchableOpacity>
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <Picker
//           style={styles.filterPicker}
//           selectedValue={ratingFilter}
//           onValueChange={handleRatingFilter}
//         >
//            <Picker.Item label="Select Rating" value="select" />
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//           <Picker.Item label="4" value="4" />
//           <Picker.Item label="5" value="5" />
//         </Picker>
//         <Picker
//           style={styles.filterPicker}
//           selectedValue={priceFilter}
//           onValueChange={handlePriceFilter}
//         >
//           <Picker.Item label="Select Price" value="select" />
//           <Picker.Item label="1" value="1" />
//           <Picker.Item label="2" value="2" />
//           <Picker.Item label="3" value="3" />
//         </Picker>
//       </View>
//       <ScrollView style={styles.restaurantList}>{renderRestaurantCards()}</ScrollView>
//     </View>
//   );
// }






import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, Picker } from 'react-native';
import styles from './restaurantsScreen.styles';

const restaurantImages = [
  require('../../assets/Restaurants/cuisineGreek.jpg'),
  require('../../assets/Restaurants/cuisineJapanese.jpg'),
  require('../../assets/Restaurants/cuisinePasta.jpg'),
  require('../../assets/Restaurants/cuisinePizza.jpg'),
  require('../../assets/Restaurants/cuisineSoutheast.jpg'),
];

export default function RestaurantsScreen() {
  const [ratingFilter, setRatingFilter] = useState('select');
  const [priceFilter, setPriceFilter] = useState('select');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const handleRatingFilter = (value) => {
    setRatingFilter(value);
  };

  const handlePriceFilter = (value) => {
    setPriceFilter(value);
  };

  const handleRestaurantClick = () => {
    // navigate to restaurant menu/order page
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/api/restaurants')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);
  
  const filteredRestaurants = data.filter(
    (restaurant) =>
      (ratingFilter === 'select' || restaurant.rating.toString() === ratingFilter) &&
      (priceFilter === 'select' || restaurant.price_range === priceFilter)
  );

  const renderRestaurantCards = () => {
    return filteredRestaurants.map((restaurant, index) => (
      <TouchableOpacity
        key={index}
        style={styles.restaurantCard}
        onPress={handleRestaurantClick}
      >
        <Image source={restaurantImages[index]} style={styles.restaurantImage} />
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantRating}>Rating: {restaurant.rating}</Text>
          <Text style={styles.restaurantPrice}>Price: {restaurant.price_range}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Picker
          style={styles.filterPicker}
          selectedValue={ratingFilter}
          onValueChange={handleRatingFilter}
        >
          <Picker.Item label="Select Rating" value="select" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
        <Picker
          style={styles.filterPicker}
          selectedValue={priceFilter}
          onValueChange={handlePriceFilter}
        >
          <Picker.Item label="Select Price" value="select" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      </View>
      <ScrollView style={styles.restaurantList}>{renderRestaurantCards()}</ScrollView>
    </View>
  );
}
