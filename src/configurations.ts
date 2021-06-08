import {ThemeManager, Colors} from 'react-native-ui-lib';

export function setAppTheme() {
  ThemeManager.setComponentTheme('Button', {backgroundColor: Colors.green30});
  ThemeManager.setComponentTheme('Text', {color: Colors.grey10});
}
