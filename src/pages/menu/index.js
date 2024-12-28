import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Categorys } from '../../components/categorias';
import { Trending } from '../../components/trending';
import { Feather } from '@expo/vector-icons'

const Menu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity style={styles.btn} onPress={() => {alert('Carrinho')}}>
            <Feather name="shopping-cart" size={30} color="#000" />
            </TouchableOpacity>
            </View>
            <Categorys />
            <Trending />
            
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 100,
    },
    containerMenu: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignItems: 'center',
    },
    btn: {
        
        
        marginTop: 90,
        alignItems: 'center',
    },
});

export {Menu};