import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './restaurantsScreen.styles';
import Header from './Header';
import Footer from './Footer';

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
  const navigation = useNavigation();

  const handleRatingFilter = (value) => {
    setRatingFilter(value);
  };

  const handlePriceFilter = (value) => {
    setPriceFilter(value);
  };

  const handleRestaurantClick = (restaurant) => {
    navigation.navigate('RestaurantMenu', { restaurant });
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
      (priceFilter === 'select' || restaurant.price_range === parseInt(priceFilter))
  );

  const renderRestaurantCards = () => {
    return filteredRestaurants.map((restaurant, index) => (
      <TouchableOpacity
        key={index}
        style={styles.restaurantCard}
        onPress={() => handleRestaurantClick(restaurant)}
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
      <Header />
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
          <Picker.Item label="$" value="1" />
          <Picker.Item label="$$" value="2" />
          <Picker.Item label="$$$" value="3" />
        </Picker>
        
      </View>
      <ScrollView style={styles.restaurantList}>{renderRestaurantCards()}</ScrollView>
      <View style={styles.footer}><Footer/>
      </View>
    </View>
  );
}
