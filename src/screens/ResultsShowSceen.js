import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Dimensions, } from 'react-native'
import yelp from '../API/yelp'
import Carousel from 'react-native-snap-carousel'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const window = Dimensions.get("window")
// const screen = Dimensions.get("screen")



const ResultsShowSceen = ({ route, navigation }) => {
    const [result, setResult] = useState()
    const { id } = route.params

    // console.log(result)

    const carouselRef = useRef('')
    const onPressCarousel = (index) => {
        carouselRef.current.snapToItem(index);
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    onPressCarousel(index);
                }}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    height: 300,
                    padding: 12,
                }}>
                <View style={{ backgroundColor: 'transperent', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ height: window.height / 2.8, width: window.width / 1.2, borderRadius: 20, }}
                        source={{ uri: item }} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <>
            <Text style={styles.text}>Welcome to {result.name} page</Text>
            <View
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Carousel
                    layout={'tinder'}
                    layoutCardOffset={9}
                    ref={carouselRef}
                    data={result.photos}
                    sliderWidth={window.width / 1}
                    itemWidth={window.width / 1.1}
                    renderItem={renderItem}
                    useScrollView
                    activeSlideAlignment="center"
                />
            </View>
            <Text style={styles.text}>Our Phone number is:{result.phone}</Text>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: result.coordinates.latitude,
                        longitude: result.coordinates.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: result.coordinates.latitude,
                            longitude: result.coordinates.longitude,
                        }}
                        title={result.name}
                    // description={"description"}
                    />
                </MapView>
            </View>

        </>
    )
}

export default ResultsShowSceen

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 30,
        alignSelf: 'center'
    },
    text: {
        padding: 5,
        fontSize: 25,
        marginBottom: 10,
        fontFamily: 'Chilanka-Regular',
        textAlign: 'center'
    },
    container: {
        height: 250,
        width: window.width,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        borderColor: '#ccc',
    },
    map: {
        borderRadius: 30,
        height: 250,
        width: window.width,
    },
})
