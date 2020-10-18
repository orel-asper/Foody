import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={[styles.container]}>
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : require('../images/ErorrImage.png')} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.description}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 20,
        marginBottom: 5,
    },
    name: {
        fontFamily: 'mon',
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontFamily: 'mon',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
