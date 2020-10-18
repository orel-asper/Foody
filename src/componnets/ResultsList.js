import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Restaurant Page', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: 'Chilanka-Regular',
        marginLeft: 15,
        marginBottom: 10
    },
    container: {
        marginBottom: 10,
    }
})
