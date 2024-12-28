import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sandwiches = () => {
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

export {Sandwiches};