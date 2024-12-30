import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Pizzas = () => {
    const [pizzas, setPizzas] = useState([
        {id: 1,
             name: 'Calabresa',
            description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona, orégano e azeite.',
            price: 35.00,
            img: 'https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1212512019.jpg',
            },
            {id: 2,
                name: 'Mussarela',
                description: 'A pizza de mussarela é uma das opções mais populares de pizza, com a combinação de queijo derretido e molho de tomate',
               price: 35.00,
               img: 'https://pizzafacil.ind.br/website2018/wp-content/uploads/2018/04/pizza-mussarela-883x395.jpg',
               },{id: 3,
                name: 'Frango',
                description: 'Com generosa cobertura de frango desfiado, queijo mussarela e requeijão cremoso, traz aquela combinação especial que todo mundo adora.',
               price: 35.00,
               img: 'https://s2-receitas.glbimg.com/X1Jh31TcFcl8b8U_D_j7bYJFLrU=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/l/N/7LsasZQoqZitWuUyIjAQ/pizza-de-frango-com-catupiry.jpg',
               },{id: 4,
                name: 'Mista',
                description: 'Pizza feita artesanalmente no forno à lenha, encoberta com molho de tomate, mussarela e presunto picadinho.',
               price: 35.00,
               img: 'https://speedy.uenicdn.com/24dcc60e-3d3a-4007-98e5-219826716a13/c512_a/image/upload/v1587225738/business/7458c216-75b0-44de-a561-c740ae903f36.jpg',
               },
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Pizzas</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={pizzas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <TouchableOpacity></TouchableOpacity>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>R$ {item.price}</Text>
                        <View style={styles.cardItem}>
                        <Image source={{uri: item.img}} style={styles.img} />
                        <Text style={styles.textDesc}>{item.description}</Text>
                        </View>
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
        padding: 10,
        
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
        marginBottom: 15,
        justifyContent: 'center',
        width: '99%'
    },
    textbtn: {
        color: '#fff',
        fontSize: 20,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft: -20,
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cardItem: {
        padding: 30,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        marginTop: 15,
        
    },
    textDesc: {
        fontSize: 19,
        color: '#000',
        textAlign: 'center',
        width: '60%',
    },
});

export {Pizzas};