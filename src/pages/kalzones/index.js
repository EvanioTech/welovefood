import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Kalzones = () => {
    const [hamburgues, setHamburgues] = useState([
        {   id: 1,
            name: 'Kalzone de Filé Mignon',
            description: 'Molho de tomate, mussarela, filé mignon, cebola, azeitona, orégano e azeite.',
            price: 'R$ 45,00',
            img: 'https://admin.minikalzone.com.br/uploads/product/2/66aa857fac0183.29515226.png'},
            {id: 2,
                name: 'Kalzone de Frango',
                description: 'Recheio cremoso de frango desfiado com catupiry, temperado com ervas e especiarias, envolto em uma massa dourada e macia.',
               price: 35.00,
               img: 'https://admin.minikalzone.com.br/uploads/product/13/66aa86d1d95a98.95992680.png',
               },{id: 3,
                name: 'Kalzone de Camarão',
                description: 'Camarões suculentos em um molho especial com toque de alho e ervas, combinados com queijo cremoso, dentro de uma massa leve e crocante.',
               price: 35.00,
               img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6r_0yWztPSS7a8ywgun-iFJWk264mdlZCBQ&s',
               },{id: 4,
                name: 'Kalzone de Chocolate',
                description: 'Uma explosão doce com recheio de chocolate derretido, finalizado com uma fina camada de açúcar polvilhado sobre a massa macia.',
               price: 35.00,
               img: 'https://www.minikalzone.com.br/static/image-2-e75b44e091b060ee2f663dbddd87be6d.png',
               },
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Kalzones</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={hamburgues}
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
export {Kalzones};