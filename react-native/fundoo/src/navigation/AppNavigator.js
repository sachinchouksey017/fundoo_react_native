import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Register from '../screens/register';
import Forgot from '../screens/forgot';
import sideNave from '../navigation/drawerNavigation'
const app = createStackNavigator({
  Register: { screen: Register },
  Login: { screen: Login },
  Forgot: Forgot,
  SideNave: {
    screen: sideNave, navigationOptions: {
      header: null,
    }
  }

}, {
    initialRouteName: 'SideNave'
  });

const AppNavigator = createAppContainer(app);

export default AppNavigator;