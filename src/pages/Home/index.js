import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Produtos from '../../components/Produtos'

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Image
                 source={require('../../assets/logo.png')}
                 style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Produtos</Text>
                    <Text style={styles.text}>:</Text>
                    <View opacity={0.8}>
                        <Text style={styles.subtext}>Eletrodomésticos</Text>
                    </View>   
                </View>
            </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Produtos img={require('../../assets/produtos/brastemp.jpg')} preco="R$6389,00">
                        Geladeira Fost Free Brastemp Evox Inverse 540,6L
                        </Produtos>
                        <Produtos img={require('../../assets/produtos/brastemp2.jpg')} preco="R$2789,00">
                        Geladeira/Refrigerador Brastemp Fost Free Duplex- 375L
                        </Produtos>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Produtos img={require('../../assets/produtos/consul.jpg')} preco="R$6389,00">
                        Geladeira/Refrigerador Consul Frost Free Duplex - 340L                        
                        </Produtos>
                        <Produtos img={require('../../assets/produtos/fogãoElectrolux.jpg')} preco="R$1499,99">
                        Fogao 4 Bocas Electrolux - Acendimento Automático
                        </Produtos>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Produtos img={require('../../assets/produtos/fogãoConsul.jpg')} preco="R$899,99">
                        Fogao 4 Bocas Consul - Acendimento Automático
                        </Produtos>
                        <Produtos img={require('../../assets/produtos/microondasElectrolux.jpg')} preco="R$499,99">
                        Micro-ondas Electrolux 20L
                        </Produtos>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Produtos img={require('../../assets/produtos/microPhilco.jpg')} preco="R$500,00">
                        Fogao 4 Bocas Consul - Acendimento Automático
                        </Produtos>
                        <Produtos img={require('../../assets/produtos/microondasPhilco.jpg')} preco="R$499,99">
                        Micro-ondas Philco 26L
                        </Produtos>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Produtos img={require('../../assets/produtos/lavadouraElectro.jpg')} preco="R$4.000,00">
                        Lavadora de Roupas Premium Care 11kg Front Load Electrolux                  
                        </Produtos>
                        <Produtos img={require('../../assets/produtos/lavadouraLG.jpg')} preco="R$3.290,90">
                        Lavadora de Roupas LG Smart
                        </Produtos>
                    </View>

                </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#FFF'
        },
    header:{
        marginBottom: 8
        },
        image:{
            marginTop: 2,
            width: '100%',
            height: '40%'
        },
        textContainer:{
            flexDirection: 'row',
            marginVertical: '5%',
            marginHorizontal: '5%',
            backgroundColor: '#F0FFFF'
            },
        text:{
            fontSize: 20,
            marginHorizontal: '1%',
            fontFamily: 'Padauk_400Regular',
            fontWeight: 'bold'
        },
        subtext:{
            fontSize: 20,
            marginHorizontal: '1%',
            fontFamily: 'Padauk_400Regular'
        }

});
