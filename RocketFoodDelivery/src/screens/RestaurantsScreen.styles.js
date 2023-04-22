import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    filterPicker: {
      flex: 1,
      height: 50,
    },
    restaurantList: {
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    restaurantCard: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    restaurantImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 10,
    },
    restaurantInfo: {
      flex: 1,
    },
    restaurantName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    restaurantRating: {
      fontSize: 14,
    },
    restaurantPrice: {
      fontSize: 14,
    },
  });
  
export default styles;
