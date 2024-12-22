
import {  StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/home';
import { Menu } from './src/pages/menu';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  return (
    
     <NavigationContainer>
      <Routes /> 
      </NavigationContainer>
      
    
  );
}


