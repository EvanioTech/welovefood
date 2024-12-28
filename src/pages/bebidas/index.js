import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Drinks = () => {
    const [drinks, setDrinks] = useState([
        {id: 1, name: 'Drink 1'},
        {id: 2, name: 'Drink 2'},
        {id: 3, name: 'Drink 3'},
        {id: 4, name: 'Drink 4'},
        {id: 5, name: 'Drink 5'},
        {id: 6, name: 'Drink 6'},
        {id: 7, name: 'Drink 7'},
        {id: 8, name: 'Drink 8'},
        {id: 9, name: 'Drink 9'},
        {id: 10, name: 'Drink 10'},
        {id: 11, name: 'Drink 11'},
        {id: 12, name: 'Drink 12'},
        {id: 13, name: 'Drink 13'},
        {id: 14, name: 'Drink 14'},
        {id: 15, name: 'Drink 15'},
        {id: 16, name: 'Drink 16'},
        {id: 17, name: 'Drink 17'},
        {id: 18, name: 'Drink 18'},
        {id: 19, name: 'Drink 19'},
        {id: 20, name: 'Drink 20'},
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bebidas Component</Text>
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
    text: {
        fontSize: 20,
        color: '#000',
    },
});

export {Drinks};