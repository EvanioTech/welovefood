import React, { use } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../../images/logo.png')}
            />
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Menu')}>
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