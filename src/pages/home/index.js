import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../../images/logo.png')}
            />
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.text}>Estou com fome!</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    img:{
        width: 400,
        height: 450,
    },
    btn:{
        backgroundColor: 'yellow',
        padding: 10,
        marginTop:10,
        borderRadius: 10,

    }
});

export  {Home};