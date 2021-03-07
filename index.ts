import {Navigation} from 'react-native-navigation';
// import {registerLoggerForDebug} from 'remx';
import {registerScreens} from './src/screens';
import {Colors, Assets} from 'react-native-ui-lib';
import './src/assets';
import {App, Root} from 'rnn-copilot';

registerScreens();
// registerLoggerForDebug(console.log);

App.withTopBar({noBorder: true, title: {color: Colors.white}, rightButtonColor: Colors.white, leftButtonColor: Colors.white, backButton: {icon: Assets.icons.back, color: Colors.white}, background: {color: Colors.green30}}).withLayout({
  componentBackgroundColor: Colors.grey80,
});

Navigation.events().registerAppLaunchedListener(() => {
  App.set();
  Root.clear().withSingleStack('LoginScreen').set();
});
