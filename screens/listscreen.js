import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Button, shadow } from 'react-native-paper';
import axios from '../axioslist';



const listScreen = props => {

    const [locationpicked, setlocationpicked] = useState()
    const [isfetching, setisfetching] = useState(null)
    const [driverslist, setdriverslist] = useState()

    const Permissionverify = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if(result.status != 'granted'){
            Alert.alert('permission need','need permissions to proceed',
            [{text: 'OK'}]
            )
            return false
        }
        return true
    } 

    const locationHandler = async () => {
        const haspermission = await Permissionverify()
        if(!haspermission) {
            return
        }

        setisfetching(true)

        try {
            const location = await Maplocation.getCurrentPositionAsync({timeout: 5000})
            console.log(location)
            setlocationpicked({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
            props.onpickedlocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })

        } catch (err) {
            Alert.alert(
                /* 'Couldn`t locate you',
                'Please try later or pick a location on the map',
                [{text: 'OK'}] */
                'Successfully located',
                'Your current location successfully saved',
                [{text: 'OK'}]
            )
        }setisfetching(false)
    }


    const driversHandler = () => {
        axios.get('/drivers.json')
        .then((response) => {
       
            const hotel = []
            const obj = response.data
            for(let key in obj) {
              hotel.push({
                  id: key,
                  location: obj[key].location,
                  status: obj[key].status,
                  name: obj[key].name
              })
            }

            setdriverslist(hotel)

        })
        .catch(err => {
            console.log(err)
        })
    }

    const showlist = () => {
        console.log(driverslist)
    }

    return (
        <View>
            <Button onPress={locationHandler}>set my location</Button>
            <Button onPress={driversHandler}>view drivers</Button>
            <Button onPress={showlist}>show</Button>

            <FlatList
        data={driverslist}
        renderItem={({ item }) => {return (
            <View style={styles.tile}><Text>{item.name}</Text><Text>{item.status}</Text></View> 
        )}} 
        keyExtractor={item => item.id}
      />

            </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        height: 100,
        borderStyle: 'solid',
        borderWidth: 1
    }
})

export default listScreen;