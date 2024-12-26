import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Categorys = () => {
    const navigation = useNavigation();
    const [categorys, setCategorys] = useState([
        {name: 'Bebidas', id: '1'},
        {name: 'Pizzas', id: '2'},
        {name: 'Hamburgues', id: '3'},
        {name: 'Kalzones', id: '4'},
        {name: 'Sobremesas', id: '5'},
    ]);
    return (
        <View style={styles.container}>
            <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal = {true}
                data={categorys}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<TouchableOpacity style={styles.btnCat} onPress={() => navigation.navigate('Drinks')}>   
                    <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
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
    btnCat:{
        padding: 10,
        backgroundColor: '#f0f0f0',
        margin: 5,
        borderRadius: 10,
        
        marginTop: 50,
        height: 50,
    }
});

export {Categorys};