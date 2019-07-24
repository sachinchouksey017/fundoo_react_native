import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Register from '../screens/register'
import Login from '../screens/login'
import Dashboard from '../screens/dashboard'
import TakeNote from '../screens/takeNote';
const Drawer = createDrawerNavigator({
  Register: {
    screen: Register
  },
  Login: {
    screen: Login
  }
  , Dashboard: Dashboard,
}, {
    initialRouteName: 'Dashboard'
  })
const sideNave = createAppContainer(Drawer);
export default sideNave;