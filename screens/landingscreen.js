import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const landingScreen = props => {
    return (
        <View style={styles.main}>
            <View style={styles.btn}>
            <Button mode="contained" onPress={() => {props.navigation.navigate('List')}}>book delivery</Button>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 268,
        width: 200
    },
    main: {
        alignItems: 'center'
    }
})

export default landingScreen;