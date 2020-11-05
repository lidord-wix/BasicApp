import {Navigation} from 'react-native-navigation';

export function registerScreens() {

  Navigation.registerComponent('MainScreen', () => require('./screens/MainScreen').default);
  Navigation.registerComponent('BlogScreen', () => require('./screens/blog/BlogScreen').default);
  Navigation.registerComponent('LoginScreen', () => require('./screens/LoginScreen').default);
  Navigation.registerComponent('GalleryScreen', () => require('./screens/GalleryScreen').default);
  Navigation.registerComponent('StoreScreen', () => require('./screens/StoreScreen').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./screens/blog/ViewPost').default);
  Navigation.registerComponent('blog.AddPost', () => require('./screens/blog/AddPost').default);

}
