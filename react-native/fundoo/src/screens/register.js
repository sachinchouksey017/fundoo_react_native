import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { userRegister } from '../service/user_service'
export default class login extends Component {
  // state = {
  //   text: ''
  // };
  constructor() {
    super();
    this.state = {
      firstName: '',
      fValidate: true,
      lastName: '',
      lValidate: true,
      userName: '',
      userValidate: true,
      password: '',
      pValidate: true,
      passwordMessage: '',
      confirmPassword: '',
      cValidate: true,
      confirmMessage: ''

    }
  }
  alph = /^[a-zA-Z]+$/;
  email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  validateFirstName() {

    if (this.alph.test(this.state.firstName)) {
      this.setState({ fValidate: true })
    } else {
      this.setState({ fValidate: false })

    }

  }

  validateLastName() {

    if (this.alph.test(this.state.lastName)) {
      this.setState({ lValidate: true })
    } else {
      this.setState({ lValidate: false })

    }

  }

  validateEmail() {

    if (this.email.test(this.state.userName)) {
      this.setState({ userValidate: true })
    } else {
      this.setState({ userValidate: false })

    }

  }
  validatePassword() {
    if (this.state.password.length < 3) {
      this.state.pValidate = false;
      this.setState({ passwordMessage: 'minimum 3 length required' })
    } else if (this.state.password.length > 10) {
      this.state.pValidate = false;

      this.setState({ passwordMessage: 'maximum 10 character allowed' })

    } else {
      this.state.pValidate = true;

      this.setState({ passwordMessage: '' })
    }
  }

  validateConfirmPassword() {
    if (this.state.confirmPassword.length < 3) {
      this.state.cValidate = false;
      this.setState({ confirmMessage: 'minimum 3 length required' })
    } else if (this.state.confirmPassword.length > 10) {
      this.state.cValidate = false;

      this.setState({ confirmMessage: 'maximum 10 character allowed' })

    } else {
      this.state.cValidate = true;

      this.setState({ confirmMessage: '' })
    }
  }


  register() {
    console.log('call', this.state.confirmPassword);

    if (this.state.fValidate && this.state.lValidate && this.state.userValidate && this.state.pValidate && this.state.cValidate && this.state.cValidate) {
      if (this.state.password != this.state.confirmPassword) {
        console.warn('password and confirm password not match');
        return;
      }

      let data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.userName,
        password: this.state.password,
        phoneNumber: "",
        imageUrl: "",
        service: "advance",
        cartId: ""
      }

      console.log(data);
      userRegister(data, (err, obj) => {
        if (err) {
          console.log('error in register', err);

        } else {
          console.log('data in register', obj);
          this.props.navigation.navigate('Login')

        }
      })


    }



  }
  signInInstead(){
    this.props.navigation.navigate('Login')
  }

  static navigationOptions = {
    header: null,
    };

  white = 'red'
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.main}>
          <View style={styles.container}>
            <Text style={styles.f}>f</Text>
            <Text style={styles.u}>u</Text>
            <Text style={styles.n}>n</Text>
            <Text style={styles.d}>d</Text>
            <Text style={styles.o1}>o</Text>
            <Text style={styles.o}>o</Text>
          </View>
          <View>
            <Text style={styles.account}> Create your Google Account</Text>
          </View>
          <View style={
            styles.inputP
          }>
            <TextInput underlineColor='red' style={[
              styles.input,
             ]
            }
              label='FirstName'
              mode='outlined'
              value={this.state.firstName}
              onChangeText={text => this.setState({ firstName: text }, this.validateFirstName)}
            />
          </View>
          {
            this.state.fValidate ? null : <Text style={styles.errorText}>Not a Valid FirstName</Text>}
          <View style={
            styles.inputP
          }>
            <TextInput style={[
              styles.input,]
            }
              label='LastName'
              mode='outlined'
              value={this.state.lastName}
              onChangeText={text => this.setState({ lastName: text }, this.validateLastName)}
            />
          </View>
          {
            this.state.lValidate ? null : <Text style={styles.errorText}>Not a Valid LastName</Text>}
          <View>
            <View style={
              styles.inputP
            }>
              <TextInput style={[
                styles.input, ]
              }
                label='UserName'
                mode='outlined'
                value={this.state.userName}
                onChangeText={text => this.setState({ userName: text }, this.validateEmail)}
              />
            </View>
            {
              this.state.userValidate ? null : <Text style={styles.errorText}>Not a Valid Email</Text>}
            <View>
              <Text style={styles.hint}>You can use letters, numbers & periods</Text>
            </View>
          </View>
          <View>
            <View style={
              styles.inputP
            }>
              <TextInput style={[
                styles.input, ]
              }
              secureTextEntry={true}
                label='Password'
                mode='outlined'
                value={this.state.password}
                onChangeText={text => this.setState({ password: text }, this.validatePassword)}
              />
            </View>
            {
              this.state.pValidate ? null : <Text style={styles.errorText}>{this.state.passwordMessage}</Text>}
            <View>
              <Text style={styles.hint}>Use 8 or more characters with a mix of letters, numbers & symbols</Text>
            </View>
          </View>
          <View style={
            styles.inputP
          }>
            <TextInput style={[
              styles.input, ]
            }
            secureTextEntry={true}
              label='ConfirmPassword'
              mode='outlined'
              value={this.state.confirmPassword}
              onChangeText={text => this.setState({ confirmPassword: text }, this.validateConfirmPassword)}
            />
          </View>
          {
            this.state.cValidate ? null : <Text style={styles.errorText}>{this.state.confirmMessage}</Text>}
          <View style={styles.button}>
            <Button color="#3473E8" onPress={() => this.signInInstead()}>
              sign in instead
  </Button>
            <Button mode="contained" color="#3473E8" onPress={() => this.register()}>
              register
  </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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


  sign: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#202124'
  },

  account: {
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: '#202124',
    marginBottom: 20
  },
  input: {
    width: '95%',
  },
  inputP: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10


  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginRight: 5
  },
  hint: {
    marginLeft: 12,
    marginTop: 2
  },
  error: {
    borderBottomColor: '#F93939',

    borderBottomWidth: 2,

  },
  errorText: { color: 'red', marginLeft: 12, marginTop: 1 }
})