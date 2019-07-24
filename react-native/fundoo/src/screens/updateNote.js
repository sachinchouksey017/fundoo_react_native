import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { Text, TextInput, View, Button, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base'
import { DrawerActions } from 'react-navigation';
import { Appbar } from 'react-native-paper';
import { addNoteService } from "../service/noteService"
import { showSnackbar } from "../service/user_service";
export default class UpdateNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      isPined: true
    }
  }
  static navigationOptions = {
    header: null,
  };
  UpdateNote() {

    if (this.state.title.length == 0) {
      showSnackbar('Title required')
      this.props.navigation.navigate('SideNave')


    } else {
      this.props.navigation.navigate('SideNave')

      addNoteService(this.state, (err, data) => {
        if (err) {
          console.log(err);

        } else {

          console.log(data);
        }
      })
      showSnackbar('Note Added Successfully');
    }


    console.log('all note ');


  }


  render() {

    return (
      <View style={styles.takeNoteMain}>
        <Appbar style={styles.TakeNote1}>
          <View style={styles.TakeText}>
            <Appbar.Action icon={require('../assest/icon/backArrow.png')} onPress={() => this.UpdateNote()} />

          </View>
          <View style={styles.TakeNote1Icon}>
            <Appbar.Action icon={require('../assest/icon/unpin.png')} onPress={() => console.log('Pressed delete')} />
            <Appbar.Action icon={require('../assest/icon/reminder.png')} onPress={() => console.log('Pressed delete')} />
            <Appbar.Action icon={require('../assest/icon/archive.png')} onPress={() => console.log('Pressed delete')} />

          </View>

        </Appbar>


        <ScrollView style={{ width: '100%' }}>

          <View>
            <TextInput placeholder='Title'
              style={{ height: 40, fontSize: 20, marginTop: 3 }}
              onChangeText={(text) => this.setState({ title: text })}

            />
          </View>

          <View style={{ width: '100%' }}>
            <TextInput placeholder='Note' multiline={true}
              value={this.state.description}
              underlineColorAndroid="transparent"
              style={{ width: '100%', height: 'auto', fontSize: 20, marginBottom: 80 }}
              onChangeText={(text) => this.setState({ description: text })}

            />
          </View>
        </ScrollView>
        <Appbar style={styles.bottom}>
          <Appbar.Action icon={require('../assest/icon/add.png')} onPress={() => console.log('Pressed archive')} />

          <Appbar.Action icon={require('../assest/icon/more.png')} onPress={() => console.log('Pressed delete')} />
        </Appbar>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  takeNoteMain: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%'
  },
  TakeNote1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',

    width: '100%',
    padding: 5

  },
  TakeNote1Icon: {
    flexDirection: 'row',
  },
  icon: {
    padding: 4
  },
  bottom: {
    backgroundColor: 'white',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    right: 0,
    bottom: 0,
  },

})
