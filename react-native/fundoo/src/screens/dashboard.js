import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { DrawerActions } from 'react-navigation';
import Header from "../component/header";
import DisplayNotes from '../component/displayNotes'
import TakeNote1 from '../component/takeNote1'
import { getAllCardService } from '../service/noteService'
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Grid: true,
      pin:[],
      unpin:[]
    }
    this.getAllCard();
  }
  pinCard = [];
  notPinCard = []
  static navigationOptions = {
    header: null,
  };
  myCallback = (dataFromChild) => {
    if (dataFromChild.type == 'grid') {
      this.setState({ Grid: dataFromChild.object })
    } else if (dataFromChild.type == 'sidenave') {
      this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }

  }
  getAllCard() {
    getAllCardService((err, data) => {
      if (err) {
        console.log(err);

      } else {
        console.log(data.data.data.data);
        data.data.data.data.forEach(element => {
          if (!element.isDeleted && !element.isArchived) {
            if (element.isPined) {
              this.pinCard.push(element);
            } else {
              this.notPinCard.push(element);
            }
          }

        });
        this.setState({pin:this.pinCard,unpin:this.notPinCard})
        console.log(this.notPinCard);
        

      }
    })
  }

  render() {

    return (
      <View style={styles.mainNote}>
        <Header callbackFromParent={this.myCallback} />
        <View style={styles.Display}>
          <DisplayNotes data={this.state} />
        </View>
        <View style={styles.takeNote}>
          <TakeNote1 navigation={this.props.navigation} />
        </View>
      </View>

    );
  }

}
const styles = StyleSheet.create({
  takeNote: {
    position: 'absolute',
    bottom: 0,
    color: 'blue',
    width: '100%'
    //  justifyContent: 'flex-end',
  },
  Display: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainNote: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent:'space-between'
  }
})
