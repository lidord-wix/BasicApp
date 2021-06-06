import {Navigation} from 'react-native-navigation';

export function registerScreens() {

  Navigation.registerComponent('MainScreen', () => require('./screens/MainScreen').default);
  Navigation.registerComponent('BlogScreen', () => require('./screens/blog/BlogScreen').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./screens/blog/ViewPost').default);
  Navigation.registerComponent('blog.AddPost', () => require('./screens/blog/AddPost').default);
  Navigation.registerComponent('LoginScreen', () => require('./screens/login/LoginScreen').default);
  Navigation.registerComponent('login.SignUpScreen', () => require('./screens/login/SignUpScreen').default);
  Navigation.registerComponent('GalleryScreen', () => require('./screens/GalleryScreen').default);
  Navigation.registerComponent('ErrorBoundaryScreen', () => require('./screens/ErrorBoundaryScreen').default);
  Navigation.registerComponent('FoundationsScreen', () => require('./screens/FoundationsScreen/index').default);

}
