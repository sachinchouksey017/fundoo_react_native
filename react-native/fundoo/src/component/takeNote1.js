import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base'
import { DrawerActions } from 'react-navigation';

export default class TakeNote1 extends Component {
  constructor(props) {
    super(props)
  }


  static navigationOptions = {
    header: null,
  };
  navigate = () => {
    this.props.navigation.navigate('TakeNote');
  }

  render() {

    return (
      <View   style={styles.TakeNote1}>
        <TouchableOpacity onPress={() => { this.navigate() }}>
          <View style={styles.TakeText}>
            <Text>Take a Note ..</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.TakeNote1Icon}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.navigate()}>
              <Image source={require('../assest/icon/checkBox.png')} style={{ width: 30, height: 30 }} />

            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.navigate()}>
              <Image source={require('../assest/icon/paint.png')} style={{ width: 30, height: 30 }} />

            </TouchableOpacity>
          </View>

          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.navigate()}>
              <Image source={require('../assest/icon/photo.png')} style={{ width: 30, height: 30 }} />


            </TouchableOpacity>
          </View>

        </View>

      </View>

    );
  }

}
const styles = StyleSheet.create({

  TakeNote1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    width: '100%',
    padding: 5

  },
  TakeNote1Icon: {
    flexDirection: 'row',
  },
  icon: {
    padding: 4
  },

})
