import Geolocation from 'react-native-geolocation-service';
import React, { useState, useEffect } from 'react'
import yelp from '../API/yelp'


export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setError("");
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
      },
      e => setError(e.message)
    )
  }, [])




  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          latitude: position.latitude,
          longitude: position.longitude,
          radius: 40000,
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Opss Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('meat')
  }, [])

  return [searchApi, results, errorMessage]
}




