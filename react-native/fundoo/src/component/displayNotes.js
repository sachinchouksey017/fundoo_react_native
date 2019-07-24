import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'native-base'
import { DrawerActions } from 'react-navigation';

export default class DisplayNotes extends Component {
  static navigationOptions = {
    header: null,
  };
  UpdateNote() {
    console.log('update Note');

  }

  render() {

    return (
      <View style={styles.main} >
        <ScrollView>
          <Text>PINNED</Text>
          <View style={this.props.data.Grid ? styles.MainContainerGrid : styles.MainContainerList}>
            {this.props.data.pin.map((item, key) => (
              <TouchableOpacity key={key} onPress={() => this.UpdateNote()}>
                <View style={this.props.data.Grid ? styles.cardGrid : styles.cardList}>
                  <View><Text style={styles.title}>{item.title} </Text></View>
                  <View><Text style={styles.description}>{item.description}</Text></View>
                </View>
              </TouchableOpacity>

            )
            )}
          </View>
          <Text>OTHERS</Text>
          <View style={this.props.data.Grid ? styles.MainContainerGrid : styles.MainContainerList}>
            {this.props.data.unpin.map((item, key) => (
              <TouchableOpacity key={key} onPress={() => this.UpdateNote()}>
                <View  style={this.props.data.Grid ? styles.cardGrid : styles.cardList}>
                  <View><Text style={styles.title}>{item.title} </Text></View>
                  <View><Text style={styles.description}>{item.description}</Text></View>

                </View>
              </TouchableOpacity>


            )
            )}
          </View>
        </ScrollView>
      </View>

    );
  }

}
const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    flex: 1
  },
  cardList: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'column',
    marginTop: 6,
    overflow: 'hidden',
    backgroundColor: '#98f2e4'


  },
  cardGrid: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'column',
    marginTop: 6,
    marginLeft: 5,
    overflow: 'hidden',


    width: 180,
    backgroundColor: '#98f2e4'

  },
  title: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    paddingBottom: 4,
    maxHeight: 65

  },
  description: {
    fontSize: 15,
    padding: 10,
    paddingTop: 2,
    maxHeight: 40,
    overflow: 'hidden'
  },
  MainContainerGrid: {
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'

  },
  MainContainerList: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',

  },

  TextStyle: {
    fontSize: 25,
    textAlign: 'center'
  }
})
