import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const Drinks = () => {
    const [drinks, setDrinks] = useState([
        {id: 1,
             name: 'Coca-Cola 2L',
            
            price: 5.00,
            img: 'https://bretas.vtexassets.com/arquivos/ids/192050-1200-auto?v=638375518430000000&width=1200&height=auto&aspect=true',
            },
            {id: 2,
                name: 'Fanta laranja 2L',
               
               price: 5.00,
               img: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168754-800-auto?v=638342826918430000&width=800&height=auto&aspect=true',
               },{id: 3,
                name: 'Pepsi 1L',
               
               price: 5.00,
               img: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168664-800-auto?v=638342826763170000&width=800&height=auto&aspect=true',
               },{id: 4,
                name: 'Coca-Cola Lata 350ml',
               
               price: 5.00,
               img: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168690-800-auto?v=638342826764230000&width=800&height=auto&aspect=true',
               },{id: 5,
                name: 'Pepsi Lata 350ml',
               
               price: 5.00,
               img: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168739-800-auto?v=638342826767700000&width=800&height=auto&aspect=true',
               },{id: 6,
                name: 'Fanta Laranja Lata 220ml',
               
               price: 5.00,
               img: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168679-800-auto?v=638342826764100000&width=800&height=auto&aspect=true',
               },
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Bebidas</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={drinks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <TouchableOpacity></TouchableOpacity>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>R$ {item.price}</Text>
                        <Image source={{uri: item.img}} style={{width: 200, height: 200}} />
                        <TouchableOpacity style={styles.btn} onPress={() => {alert('item adicionado!')}}>
                            <Text style={styles.textbtn}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
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
        padding: 20,
        
    },
    textTitle: {
        fontSize: 40,
        color: '#000',
        marginTop: 50,
        marginBottom: 20,
    },
    btn:{
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    textbtn: {
        color: '#fff',
        fontSize: 20,
    },
});

export {Drinks};