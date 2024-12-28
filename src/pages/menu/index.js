import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Categorys } from '../../components/categorias';
import { Trending } from '../../components/trending';

const Menu = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
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
});

export {Menu};