import {Navigation} from 'react-native-navigation';

export function registerScreens() {

  Navigation.registerComponent('MainScreen', () => require('./screens/MainScreen').default);
  Navigation.registerComponent('BlogScreen', () => require('./screens/BlogScreen').default);
  Navigation.registerComponent('LoginScreen', () => require('./screens/LoginScreen').default);

}
