import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ResultsList from '../componnets/ResultsList'
import SearchBar from '../componnets/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filteredResultsByPrice = (price) => {
        return results.filter(result => result.price === price
        )
    }

    return (
        <>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text style={styles.results}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList
                    results={filteredResultsByPrice('$')}
                    title='Cost Effective'
                />
                <ResultsList
                    results={filteredResultsByPrice('$$')}
                    title='Bit Pricer'
                />
                <ResultsList
                    results={filteredResultsByPrice('$$$')}
                    title='Big Spender'
                />
                <ResultsList
                    results={filteredResultsByPrice('$$$$')}
                    title='Rich'
                />
            </ScrollView>
        </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    results: {
        alignSelf: 'center',
        fontFamily: 'Chilanka-Regular',
    }
})
