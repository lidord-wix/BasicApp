import {Assets} from 'react-native-ui-lib';

const icons = {
  back: require('./back.png'),
  chevronDown: require('./chevronDownSmall.png'),
  chevronUp: require('./chevronUpSmall.png')
};

Assets.loadAssetsGroup('icons', icons);
