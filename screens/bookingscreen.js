import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import TimePicker from "react-native-24h-timepicker";
import axios from '../axioslist';

class bookingscreen extends Component {

    state = {
        time: "",
        name: 'tony',
        link: {
          uri: ''
        }
    }



    componentDidMount () {
      this.setState({
        link:{uri: '/drivers/' + this.props.navigation.getParam('name') + '/.json'}
      })
    }

    
    checkout() {
      // axios.patch('/drivers/' + this.props.navigation.getParam('name') + '/.json' , {time: this.state.time, booking: {lat : this.props.navigation.getParam('lat'), lng: this.props.navigation.getParam('lng')}})
      axios.patch('/drivers/' + this.props.navigation.getParam('name') + '/.json', {booking: {time: this.state.time, lat: this.props.navigation.getParam('lat'), lng: this.props.navigation.getParam('lng')}})
      .then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    }


    onCancel() {
        this.TimePicker.close();
      }
     
      onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
      }

    render () {
        return (
            <View style={styles.container}>
        <Button  onPress={() => this.TimePicker.open()}>pickup time</Button>
    
        <Text style={styles.text}>{this.state.time}</Text>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
        <Text>{this.props.navigation.getParam('lat')}</Text>
        <Text>{this.props.navigation.getParam('lng')}</Text>
        <Button mode="contained" color="blue" onPress={()=>{this.checkout()}}>book</Button>
        <Text>{this.props.navigation.getParam('name')}</Text>
      </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
      paddingTop: 100
    },
    text: {
      fontSize: 20,
      marginTop: 3
    },
    button: {
      backgroundColor: "orange",
      paddingVertical: 11,
      paddingHorizontal: 17,
      borderRadius: 3,
      marginVertical: 10
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "600"
    }
  });


export default bookingscreen;