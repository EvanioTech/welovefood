import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Menu = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            {/* Add your menu items here */}
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
    },
});

export {Menu};