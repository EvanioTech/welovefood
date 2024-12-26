import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Trending = () => {
    const [maisPedidos, setMaispedidos] = useState([
        {   id: '1',
            name: 'Pizza de Calabresa',
            description: 'Molho de tomate, mussarela, calabresa, cebola, azeitona, orégano e azeite.',
            price: 'R$ 35,00',
            image: 'https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1212512019.jpg'},
        {   id: '2',
             name: 'Kalzone de Filé Mignon',
             description: 'Molho de tomate, mussarela, filé mignon, cebola, azeitona, orégano e azeite.',
             price: 'R$ 45,00',
             image: 'https://admin.minikalzone.com.br/uploads/product/2/66aa857fac0183.29515226.png'},
        {   id: '3',
             name: 'Hamburguer de Picanha',
             description: 'Pão de hamburguer, picanha, queijo, alface, tomate, cebola, maionese e ketchup.',
             price: 'R$ 25,00',
             image: 'https://conteudo.imguol.com.br/c/entretenimento/4f/2022/05/03/hamburguer-1651610679144_v2_1170x540.jpg'},
        {   id: '4',
             name: 'Pudim de Leite',
            description: 'Pudim de leite condensado com calda de caramelo.',
            price: 'R$ 15,00',
            image: 'https://s2-receitas.glbimg.com/YTXTFuRbAtHmHJV0ddq9QJPqYt8=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/P/T/BRcriaQP6Lfn7NWtestA/pudim-de-leite-receita.jpg'
        },
        {id: '5',
             name: 'Refrigerante Coca-Cola',
             description: 'Refrigerante de 2 litros.',
              price: 'R$ 10,00',
               image: 'https://bretas.vtexassets.com/arquivos/ids/192050-1200-auto?v=638375518430000000&width=1200&height=auto&aspect=true'},
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mais Pedidos</Text>
            <FlatList 
            showsVerticalScrollIndicator = {false}
            data = {maisPedidos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.img} source={{uri: item.image}} />
                    <View style={styles.containerView}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text style={styles.text}>{item.price}</Text>
                    
                    </View>
                    
                </TouchableOpacity>
                
                
                
                
            )}
            onEndReachedThreshold={0.5} // 0.5 significa quando estiver no meio do penúltimo item
  contentContainerStyle={{ paddingBottom: 20 }}
            />
            <View style={{marginBottom:10}}>
                <Text style={styles.textFim}>@welovefood</Text>
                </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        
    },
    containerView:{
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
    img: {
        width: 100,
        height: 100,
    },
    card: {
        padding: 10,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        
    },
    textFim: {
        fontSize: 20,
        color: '#000',
        
    }
});

export {Trending};