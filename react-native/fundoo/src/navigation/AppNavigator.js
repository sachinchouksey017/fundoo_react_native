import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Register from '../screens/register';
import Forgot from '../screens/forgot';
import sideNave from '../navigation/drawerNavigation'
import TakeNote from '../screens/takeNote'
import UpdateNote from '../screens/updateNote'
import DisplayNotes from '../component/displayNotes'
const app = createStackNavigator({
  Register: { screen: Register },
  Login: { screen: Login },
  Forgot: {screen: Forgot},
  TakeNote:{screen: TakeNote},
  UpdateNote:UpdateNote,
  SideNave: {
    screen: sideNave, navigationOptions: {
      header: null,
    }
  },
  DisplayNote:DisplayNotes,

}, {
    initialRouteName: 'UpdateNote'
  });

const AppNavigator = createAppContainer(app);

export default AppNavigator;