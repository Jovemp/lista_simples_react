import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default class Itens extends Component {

    render() {
        const item = this.props.item;
        return (
            <View style={styles.item}>
                <View>
                    <Image source={{ uri: item.foto }} style={styles.imagem} />
                </View>
                <View style={styles.detalheView}>
                    <Text style={styles.txtTitulo}>{item.titulo}</Text>
                    <Text>R$ {item.valor}</Text>
                    <Text>Local: {item.local_anuncio}</Text>
                    <Text>Dt. Publicação: {item.data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imagem: {
        height: 80,
        width: 80,
        marginRight: 5
    },
    item: {
        alignContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        height: 100,
        marginTop: 2,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderColor: '#999'
    },
    txtTitulo: {
        fontWeight: 'bold'
    },
    detalheView: {
        flex: 1
    }
});
