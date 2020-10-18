import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.textInput}>
            <Icon raised
                name='search'
                size={20}
                type='font-awesome'
                color='#f50'
                onPress={onTermSubmit} />
            <TextInput placeholder='Search Restaurants' style={styles.InputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    textInput: {
        marginTop: 15,
        backgroundColor: '#DDDDDD',
        height: 60,
        borderRadius: 30,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    InputStyle: {
        fontSize: 18,
        flex: 1,
    },

})
