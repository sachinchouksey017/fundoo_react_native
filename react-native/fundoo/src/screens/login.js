import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ScrollView,Dimensions } from 'react-native';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import { userLogin } from '../service/user_service'
import PasswordInputText from 'react-native-hide-show-password-input';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
export default class login extends Component {
   dim = Dimensions.get('screen');
  state = {
    email: '',
    password: '',
    emailValidate: true,
    spinner: false,
    orientation:this.dim.height >= this.dim.width
  };
  email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

constructor(){
  super();

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    this.setState({
      orientation: isPortrait() ? true : false
    });
  });
}
  showSnackbar(title) {
    Snackbar.show({
      title: title,
      duration: Snackbar.LENGTH_SHORT,
    });
  }
  

  loginUser() {

    console.log('in login', this.state);
    if (this.state.email.length == 0 || !this.state.emailValidate) {
      this.showSnackbar('please provide valid email');
      return;
    }
    if (this.state.password.length > 0) {
      console.log('in side condtion');
      this.setState({spinner: !this.state.spinner});

      userLogin(this.state, (err, data) => {
        this.setState({spinner: !this.state.spinner});
        if (err) {
          console.log('error in loginUSer', err);

        } else {
          console.log('data in login user', data);
          this.props.navigation.navigate('Dashboard')

        }
      })
    }else{
      this.showSnackbar('please provide valid password');

    }
  }
  validateEmail() {

    if (this.email.test(this.state.email)) {
      this.setState({ emailValidate: true })
    } else {
      this.setState({ emailValidate: false })

    }

  }
  static navigationOptions = {
    header: null,
  };


  createAccount() {
    this.props.navigation.navigate('Register')
  }
  forgot(){
    this.props.navigation.navigate('Forgot')
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
        <View style={styles.container}>
          <Text style={styles.f}>f</Text>
          <Text style={styles.u}>u</Text>
          <Text style={styles.n}>n</Text>
          <Text style={styles.d}>d</Text>
          <Text style={styles.o1}>o</Text>
          <Text style={styles.o}>o</Text>
        </View>
        <View>
          <Text style={styles.sign}>Sign in</Text>
        </View>
        <View>
          <Text style={styles.account}> with your fundoo Account</Text>
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
          this.state.emailValidate ? null : <Text style={styles.errorText}>Not a Valid Email</Text>}


        <View style={
          styles.inputP
        }>

          <TextInput style={
            styles.input
          }
            secureTextEntry={true}
            label='Password'
            mode='outlined'
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.button}>
          <Button color="#3473E8" onPress={() => this.createAccount()}>
            Create Account
  </Button>
          <Button mode="contained" color="#3473E8" onPress={() => this.loginUser()}>
            login
  </Button>
        </View>
        <View style={ this.state.orientation?styles.forgot:styles.forgotLandscape} >
          <Button color="#3473E8" onPress={() => this.forgot()}>
            Forgot Password
  </Button>
        </View>


      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  main: {
    flexDirection: 'column',
  },

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


  sign: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#202124'
  },

  account: {
    fontSize: 20,
    textAlign: 'center',
    color: '#202124'
  },
  input: {
    width: '80%'
  },
  inputP: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%'

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 42
  },
  forgotLandscape: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 120
  },
  errorText: { color: 'red', marginLeft: 40, marginTop: 1 }

});
