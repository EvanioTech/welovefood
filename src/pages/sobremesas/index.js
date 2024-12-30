import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Sobremesas = () => {
    const [hamburgues, setHamburgues] = useState([
        {   id: 1,
            name: 'Pudim de Leite',
           description: 'Pudim de leite condensado com calda de caramelo.',
           price: 'R$ 15,00',
           img: 'https://s2-receitas.glbimg.com/YTXTFuRbAtHmHJV0ddq9QJPqYt8=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/P/T/BRcriaQP6Lfn7NWtestA/pudim-de-leite-receita.jpg'
       },
            {id: 2,
                name: 'Mousse de Maracujá',
                description: 'Mousse leve e aerado de maracujá, com sabor tropical e uma delicada calda de sementes da fruta.',
               price: 35.00,
               img: 'https://static.itdg.com.br/images/640-440/8fed8f60d3c8e3990396e2478cbc7f2a/shutterstock-1905617575-1-.jpg',
               },{id: 3,
                name: 'Brownie de Chocolate',
                description: 'Brownie macio e intenso, com textura densa e pedacinhos de chocolate, perfeito para amantes de doces.',
               price: 35.00,
               img: 'https://static.itdg.com.br/images/640-440/5d139b703a9df7604abf863a3bd76aa6/252863-shutterstock-1938293728.jpg',
               },{id: 4,
                name: 'Cheesecake de Morango',
                description: 'Base de biscoito crocante com creme suave de cream cheese, coberto com uma generosa camada de calda de morango.',
               price: 35.00,
               img: 'https://www.minhareceita.com.br/app/uploads/2023/07/x-calabre-destaque-1.jpg',
               },
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Sobremesas</Text>
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

export {Sobremesas};