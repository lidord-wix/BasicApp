import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import {Colors} from 'react-native-ui-lib';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'MainScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Basic App',
                    color: Colors.white
                  },
                  background: {
                      color: Colors.green30
                  }
                }
              }
            }
          }
        ],
      }
    }
  });
});
