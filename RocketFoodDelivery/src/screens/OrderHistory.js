// import React, {useEffect, useState} from 'react'
// import {StyleSheet,Image, ScrollView, Text, TouchableOpacity} from 'react-native';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Header from './Header';
// import Footer from './Footer';

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     async function getUserFromLocal(){
//       try{
//         const userData = await AsyncStorage.getItem('@user');
//         if(userData){
//           setUser(JSON.parse(userData));
//         }
//         else{
//           throw Error('User data not present.')
//         }
//       }
//       catch(error){
//         alert(error.message);
//       }
//     }
//     getUserFromLocal();
//   },[]);
//   useEffect(() => {
//     async function fetchCustomerOrders(){
//       try{
//         const response = await fetch(`http://localhost:3000/api/orders?id=${user.customer_id}&type=customer`)
//         const data = await response.json();
//         if(data.error){
//           alert(`Error: ${data.error}`)
//         }
//         else{
//           setOrders(data);
//         }
//       }
//       catch(error){
//         alert(error.message);
//       }
//     }
//     fetchCustomerOrders();
//   },[user]);
//   function ordersList() {
//     return orders.map((order) => {
//         return (
//             <tr key={order.id}>
//               <td> {order.restaurant_name} </td>
//               <td> {order.status} </td>
//               <td order={order} key={order.id}> Magnifying glass </td>
//             </tr>
//         );
//     });
//   }
//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <Container fluid className="m-3">
//           <Row>
//               <Col><h1>My Orders</h1></Col>
//           </Row>
//           <Table>
//           <thead>
//                 <tr>
//                 <th>Order</th>
//                 <th>Status</th>
//                 <th>View</th>
//                 </tr>
//           </thead>
//           <tbody>
//             {ordersList()}
//           </tbody>
//           </Table>
//         </Container>
//     </ScrollView>
//   )
// }










import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import Footer from './Footer';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
//   useEffect(() => {
//     async function getUserFromLocal() {
//       try {
//         const userData = await AsyncStorage.getItem('customer_id');
//         console.log(userData);
//         if (userData) {
//           setUser(JSON.parse(userData));
//         } else {
//           throw Error('User data not present.');
//         }
//       } catch (error) {
//         alert(error.message);
//       }
//     }
//     getUserFromLocal();
//   }, []);
//   useEffect(() => {
//     async function fetchCustomerOrders() {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/orders?id=${userData}&type=customer`
//         );
//         const data = await response.json();
//         console.log(data);
//         if (data.error) {
//           alert(`Error: ${data.error}`);
//         } else {
//           setOrders(data);
//         }
//       } catch (error) {
//         alert(error.message);
//       }
//     }
//     fetchCustomerOrders();
//   }, [user]);

useEffect(() => {
    async function fetchCustomerOrders() {
      try {
        const userData = await AsyncStorage.getItem('customer_id');
        console.log(userData);
        if (!userData) {
          throw new Error('User data not present.');
        }
        
        const parsedUserData = JSON.parse(userData);
        
        const response = await fetch(
          `http://127.0.0.1:3000/api/orders?id=${userData}&type=customer`
        );
        const data = await response.json();
        console.log(data);
        if (data.error) {
          alert(`Error: ${data.error}`);
        } else {
          setOrders(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    
    fetchCustomerOrders();
  }, []);

  function ordersList() {
    return orders.map((order) => {
      return (
        <tr key={order.id}>
          <td> {order.restaurant_name} </td>
          <td> {order.status} </td>
          <td order={order} key={order.id}>
            Magnifying glass
          </td>
        </tr>
      );
    });
  }
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container fluid className="m-3">
          <Row>
            <Col>
              <h1>My Orders</h1>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>{ordersList()}</tbody>
          </Table>
        </Container>
      </ScrollView>
      <Footer />
    </>
  );
}
