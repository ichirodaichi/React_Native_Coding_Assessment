import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionCompleted from '../../screens/TransactionCompleted';
import ExchangeCrypto from '../../screens/ExchangeCrypto';
import Confirmation from '../../screens/Confirmation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExchangeCrypto">
          <Stack.Screen
            name="ExchangeCrypto"
            component={ExchangeCrypto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirmation"
            component={Confirmation}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TransactionCompleted"
            component={TransactionCompleted}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default AppNavigation;
