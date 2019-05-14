import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Tag extends Component {
   
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.f}>f</Text>
        <Text style={styles.u}>u</Text>
        <Text style={styles.n}>n</Text>
        <Text style={styles.d}>d</Text>
        <Text style={styles.o1}>o</Text>
        <Text style={styles.o}>o</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    
      },
      f: {
        color: '#4A8DF5',
        fontSize: 30,
        fontWeight: 'bold'
      },
      u: {
        color: '#EA4335',
        fontSize: 30,
        fontWeight: 'bold'
      },
      n: {
        color: '#F7BC06',
        fontSize: 30,
        fontWeight: 'bold'
      },
      d: {
        color: '#4A8DF5',
        fontSize: 30,
        fontWeight: 'bold'
    
      },
      o1: {
        color: '#55BD7F',
        fontSize: 30,
        fontWeight: 'bold'
      },
      o: {
        color: '#EA4335',
        fontSize: 30,
        fontWeight: 'bold'
    
      },
})