import React, { useState, useEffect } from 'react';
import { Rating } from 'react-native-stock-star-rating';
import { StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

import Cuisine from '../../assets/Restaurants/cuisineViet.jpg';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Menu({ route }) {
  const [products, setProducts] = useState([]);
  const { restaurant } = route.params;
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsProcessing(true); // Set isProcessing to true while fetching data
        const fetchResponse = await fetch(`http://localhost:3000/api/products?restaurant=${restaurant.id}`);
        const data = await fetchResponse.json();
        if (data.error) {
          alert('Response Error');
        } else {
          setProducts(data);
        }
        setIsProcessing(false); // Set isProcessing back to false after data fetch is complete
      } catch (e) {
        alert('Failed fetch: ' + e.message);
        setIsProcessing(false); // Set isProcessing back to false on fetch error
      }
    };
    getProducts();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: isNaN(quantity) ? 0 : quantity // Check for NaN and set to 0 if NaN
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleIncrement = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: isNaN(product.quantity) ? 1 : product.quantity + 1 // Check for NaN and set to 1 if NaN
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDecrement = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId && product.quantity > 0) {
        return {
          ...product,
          quantity: isNaN(product.quantity) ? 0 : product.quantity - 1 // Check for NaN and set to 0 if NaN
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const productList = () => {
    return products.map(product => {
      return (
        
        <Row key={product.id}>
          <Col>
            <Image style={styles.menuPic} source={Cuisine} />
          </Col>
          <Col>
            <h2>{product.name}</h2>
            <Text>{formatter.format(product.cost)}</Text>
            <Text></Text>
            <Row>
              <Col>
                <Button variant="link" onClick={() => handleDecrement(product.id)}>-</Button>
              </Col>
              <Col>
                <Text>{product.quantity}</Text>
              </Col>
              <Col>
                <Button variant="link" onClick={() => handleIncrement(product.id)}>+</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    });
  };

  const renderDollarSigns = () => {
    let length = restaurant.rating;
    let range = "";
    for (let i = 0; i < length; i++) {
      range += "$";
    }

    return range;
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header />
      <style type="text/css">
        {`
            .btn-rdelivery {
                background-color: #DA583B;
                color: white;
                width: 100%;
            }
        `}
      </style>
      <Container fluid className="m-3">
        
        <Row>
          <Col>
            <h1>Restaurant Menu</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>{restaurant.name}</h4>
            <h4>Price: {renderDollarSigns()}</h4>
            <h4>Rating: </h4> <Rating stars={restaurant.price_range} maxStars={5} size={20} />
          </Col>
          <Col>
          <Button
              variant="rdelivery"
              type="Button"
              disabled={isProcessing} // Disable the button when isProcessing is true
            >
              {isProcessing ? 'Processing Order...' : 'Create Order'} {/* Display "Processing Order..." text while isProcessing is true */}
            </Button>
          </Col>
        </Row>
        {productList()}
      </Container>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuPic: {
    width: "100%",
    height: undefined,
    aspectRatio: 16/9,
    resizeMode: 'contain',
  }
});









