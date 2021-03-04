import React from 'react';
import { View, Text, Touchable, TouchableOpacityComponent, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Produtos(props) {

    function quebraDescricao(desc){
        if(desc.length < 25){
            return desc;
        }
        return `${desc.substring(0, 22)}\n${desc.substring(22, 43)}\n${desc.substring(43, 64)}`;
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={props.img}
                style={styles.prodImg}
            />
            <Text style={styles.prodDesc}>
                {quebraDescricao(props.children)}
            </Text>
            <Text style={styles.preco}>
                {props.preco}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    prodImg:{
        width: 170,
        height: 170
    },
    prodDesc:{
        fontSize: 16,
        fontFamily: 'Padauk_400Regular'
    },
    preco:{
        color:'#214245'
    }
});
