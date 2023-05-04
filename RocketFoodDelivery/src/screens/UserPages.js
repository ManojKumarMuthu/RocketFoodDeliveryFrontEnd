import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginAccountSelection() {
  const [hasCustomerAccount, setHasCustomerAccount] = useState(false);
  const [hasCourierAccount, setHasCourierAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const checkAccounts = async () => {
      try {
        // Check if user has customer account
        const customerAccount = await AsyncStorage.getItem('customerAccount');
        if (customerAccount) {
          setHasCustomerAccount(true);
        }
        // Check if user has courier account
        const courierAccount = await AsyncStorage.getItem('courierAccount');
        if (courierAccount) {
          setHasCourierAccount(true);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    checkAccounts();
  }, []);

  const handleAccountSelection = (selectedAccount) => {
    // Save selected account to AsyncStorage
    AsyncStorage.setItem('selectedAccount', selectedAccount);
    // Redirect to corresponding app
    if (selectedAccount === 'customer') {
      navigation.navigate('CustomerApp');
    } else if (selectedAccount === 'courier') {
      navigation.navigate('CourierApp');
    }
  };

  // Automatically redirect if user has only one account
  useEffect(() => {
    if (hasCustomerAccount && !hasCourierAccount) {
      handleAccountSelection('customer');
    } else if (!hasCustomerAccount && hasCourierAccount) {
      handleAccountSelection('courier');
    }
  }, [hasCustomerAccount, hasCourierAccount]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loading} />
      ) : (
        <View>
          {hasCustomerAccount && hasCourierAccount ? (
            <View>
              <Text style={styles.title}>Select an account</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleAccountSelection('customer')}>
                <Text style={styles.buttonText}>Customer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleAccountSelection('courier')}>
                <Text style={styles.buttonText}>Courier</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.title}>You have only one account</Text>
              {hasCustomerAccount ? (
                <TouchableOpacity style={styles.button} onPress={() => handleAccountSelection('Home')}>
                  <Text style={styles.buttonText}>Customer</Text>
                </TouchableOpacity>
              ) : null}
              {hasCourierAccount ? (
                <TouchableOpacity style={styles.button} onPress={() => handleAccountSelection('courier')}>
                  <Text style={styles.buttonText}>Courier</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  }
})
   
