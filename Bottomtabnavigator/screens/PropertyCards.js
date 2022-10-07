import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PropertyCards = () => {
  return (
    <TouchableOpacity>
        <View style={styles.container}>
            <Text>Industrial</Text>
            <Text>land</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PropertyCards

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor:'#eee',
        height:80,
        width:80,
        borderRadius:12,
        elevation:5,
        marginVertical:2,
        margin:8,




    }
})