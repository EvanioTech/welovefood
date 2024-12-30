import React, {useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image, FlatList} from 'react-native';

const Sandwiches = () => {
    const [pizzas, setPizzas] = useState([
        {id: 1,
            name: 'Hamburguer de Picanha',
            description: 'Pão de hamburguer, picanha, queijo, alface, tomate, cebola, maionese e ketchup.',
            price: 'R$ 25,00',
            img: 'https://minervafoods.com/wp-content/uploads/2022/12/burguer-de-picanha-1536x1024.jpg'},
            {id: 2,
                name: 'Hamburguer de Ovo',
                description: 'Delicioso hambúrguer com ovo frito no ponto perfeito, acompanhado de queijo derretido, alface fresca, tomate suculento e molho especial, tudo no pão macio.',
               price: 35.00,
               img: 'https://images.mrcook.app/recipe-image/018f7d96-9ef2-7145-bb19-3a9f2e8c8918',
               },{id: 3,
                name: 'Hamburguer de Frango',
                description: 'Suave e saboroso hambúrguer de frango grelhado, complementado com queijo, alface crocante, tomate fresco e maionese temperada, em um pão artesanal.',
               price: 35.00,
               img: 'https://www.minhareceita.com.br/app/uploads/2021/01/shutterstock_574607542-scaled.jpg',
               },{id: 4,
                name: 'Hamburguer de Calabresa',
                description: 'Hambúrguer de calabresa artesanal com sabor marcante, combinado com queijo derretido, cebola caramelizada e molho picante, servido no pão tostado.',
               price: 35.00,
               img: 'https://www.minhareceita.com.br/app/uploads/2023/07/x-calabre-destaque-1.jpg',
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

export {Sandwiches};