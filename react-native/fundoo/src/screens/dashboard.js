import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'native-base'
import { DrawerActions } from 'react-navigation';

export default class Dashboard extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {

    return (
      <View >

        <View style={styles.cardoutSide}>
          <View style={
            styles.card
          } >
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon  name='menu' />

            </TouchableOpacity>
              </View>
               <View style={styles.input} >
                <Text style={styles.search}>Search Your Note</Text>
               </View>
                  <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
           <Image source={require('')} />;

            </TouchableOpacity>
              </View>
                 <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon  name='menu' />

            </TouchableOpacity>
              </View>

          </View>
        </View>


      </View>

    );
  }

}
const styles = StyleSheet.create({
  card: {
     flexDirection:'row',
     flex:1,
    width: '98%',
    marginTop: 10,
    padding: 16,
    borderRadius: 15,
    borderColor: '#DEDFE0', // if you need 
    borderWidth: 1,
    overflow: 'hidden',
    shadowRadius: 10,
    shadowOpacity: 3,
  },
  cardoutSide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    flex:1
  },
  input:{
    flex:5,
  },
  search:{
    fontSize:20

  }

})
