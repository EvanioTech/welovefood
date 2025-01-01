import React, {useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity , Modal, Pressable, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Categorys } from '../../components/categorias';
import { Trending } from '../../components/trending';
import { Feather } from '@expo/vector-icons'

const Menu = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="shopping-cart" size={30} color="#000" />
              </TouchableOpacity>
            <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Carrinho fechado!');
            setModalVisible(!modalVisible);
          }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Meus Pedidos!</Text>
              <Text>Seu carrinho está vázio!</Text>
            <TouchableOpacity
                style={[styles.btn, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{backgroundColor: 'red'}}>X</Text>
              </TouchableOpacity>
              </View>
              </View>
              </Modal>
            </View>
            <Categorys />
            <Trending />
            
            <StatusBar style="auto" />
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
        marginTop: 100,
    },
    containerMenu: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        alignItems: 'center',
    },
    btn: {
        
        
        marginTop: 90,
        alignItems: 'center',
    },
    centeredView: {
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 65,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 200,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        fontSize: 30,
        marginBottom: 55,
        textAlign: 'center',
      },
});

export {Menu};


//<TouchableOpacity style={styles.btn} onPress={() => {alert('Carrinho')}}>
 //           <Feather name="shopping-cart" size={30} color="#000" />
         //   </TouchableOpacity>