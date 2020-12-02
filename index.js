import {Navigation} from 'react-native-navigation';
import {registerLoggerForDebug} from 'remx';
import {registerScreens} from './src/screens';
import {Colors} from 'react-native-ui-lib';

registerScreens();
registerLoggerForDebug(console.log);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'LoginScreen',
              options: {
                topBar: {
                  visible: false,
                }
              }
            }
          }
        ],
      }
    }
  });
});
