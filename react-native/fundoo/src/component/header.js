import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base'
import { DrawerActions } from 'react-navigation';

export default class Header extends Component {
  static navigationOptions = {
    header: null,
  };
  state={
    grid:false
  }
  data={
      type:'',
      object:''
  }

gridList(){
this.setState({grid:!this.state.grid})

this.data.type='grid';
this.data.object=this.state.grid;

this.props.callbackFromParent(this.data);
}

openDrawer(){
    this.data.type='sidenave';
    this.data.object='';
    
    this.props.callbackFromParent(this.data);
}

  render() {
    var icon = this.state.grid
    ? require('../assest/icon/grid.png')
    : require('../assest/icon/list.png');
    return (
      <View >

        <View style={styles.cardoutSide}>
          <View style={
            styles.card
          } >
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => this.openDrawer()}>
                <Icon name='menu' />

              </TouchableOpacity>
            </View>
            <View style={styles.input} >
              <Text style={styles.search}>Search Your Note</Text>
            </View>

            <View style={styles.icon}>
              <TouchableOpacity onPress={() => this.gridList()}>
                <Image source={icon} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            </View>

            <View style={styles.icon}>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  backgroundColor: '#fff',
                  borderRadius: 40,
                }}
              >
                <Image source={require('../assest/guru.jpg')} style={{ width: 40, height: 40, borderRadius: 40 }} />

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
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    width: '98%',
    marginTop: 10,
    padding: 12,
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
  icon: {
    flex: 1
  },
  input: {
    flex: 4,
  },
  search: {
    fontSize: 20

  }

})
