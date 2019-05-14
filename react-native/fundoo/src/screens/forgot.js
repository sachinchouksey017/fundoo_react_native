import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import { userForgot } from '../service/user_service'
import Toast from 'react-native-simple-toast';
import Tag from '../component/tag'
import Spinner from 'react-native-loading-spinner-overlay';


export default class Forgot extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    email: '',
    emailValidate: true,


  };

  email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  text = 'Not a Valid Email'
  validateEmail() {
    if (this.email.test(this.state.email)) {

      this.setState({ emailValidate: true })
    } else {
      this.text = 'Not a Valid Email';
      this.setState({ emailValidate: false })

    }

  }
  showToast(message) {
    Toast.show(message, Toast.LONG);

  }
  signInInstead() {
    this.props.navigation.navigate('Login')
  }
  forgot() {
    if (this.state.email.length == 0) {
      this.text = 'Email required'
      this.setState({ emailValidate: false });
    } else {
      this.setState({spinner: !this.state.spinner});

      this.setState({email: '',
      emailValidate: true,})
      let obj = {
        email: this.state.email
      }
      userForgot(obj, (err, data) => {
        this.setState({spinner: !this.state.spinner});

        if (err) {
          this.showToast('Email not exist');
        } else {
          this.showToast('Reset password link sent to your mail')
        }
      })
    }
  }
  render() {

    return (
      <ScrollView>
        <Spinner
           visible={this.state.spinner}
           textContent={'Loading...'}
           textStyle={styles.spinnerTextStyle}
/> 
        <View style={styles.main}>
          <View style={styles.heading}>
            <View>
              <Tag />

            </View>
            <View>
              <Text style={styles.account}>Account recovery</Text>
            </View>
            <View>
              <Text style={styles.downAccount}>
                Recover your Fundoo Account
        </Text>
            </View>
          </View>
          <View style={
            styles.inputP
          }>
            <TextInput style={
              styles.input
            }
              label='Email'
              mode='outlined'
              value={this.state.email}
              onChangeText={text => this.setState({ email: text }, this.validateEmail)}
            />



          </View>
          {
            this.state.emailValidate ? null : <Text style={styles.errorText}>{this.text}</Text>}
          <View style={styles.outerButton}>

            <View style={styles.button}>
              <Button color="#3473E8" onPress={() => this.signInInstead()}>
                sign in instead
  </Button>
              <Button mode="contained" color="#3473E8" onPress={() => this.forgot()}>
                submit
  </Button>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  heading: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  account: {
    fontWeight: "300",
    fontSize: 30,
    color: '#222526'

  }
  ,
  downAccount: {
    fontWeight: "200",
    fontSize: 20,
    color: '#222526'

  },
  input: {
    width: '80%',
    marginTop: 20
  },
  inputP: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20

  }, button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '82%'
  },
  outerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,

  },
  errorText: { color: 'red', marginLeft: 40, marginTop: 5 }

})