import React from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Colors,
  Assets,
  Image,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {registerScreens} from '../screens';
import {setAppTheme} from '../configurations';
import {push, TopBar} from 'rnn-copilot';

registerScreens();
setAppTheme();

const renderButton = (props: any, label: string) => {
  const topBar = new TopBar()
    .withTitle(label)
    .withOptions({backButton: {title: 'Main Screen'}});
  return (
    <TouchableOpacity
      marginT-20
      marginH-100
      br30
      bg-green30
      row
      spread
      style={styles.button}
      onPress={() =>
        push(`${label}Screen`, props.componentId).withTopBar(topBar).go()
      }>
      <Text marginV-10 marginL-16 color={Colors.white} text60>
        {label}
      </Text>
      <Image
        tintColor={Colors.white}
        marginT-16
        marginR-10
        source={Assets.icons.chevronRight}
      />
    </TouchableOpacity>
  );
};

const MainScreen = (props: any) => {
  return (
    <View flex centerV style={styles.container}>
      <View flex center>
        <Text text30BL>
          Main Screen
        </Text>
      </View>
      <View flex-2>
        {renderButton(props, 'Login')}
        {renderButton(props, 'Foundations')}
        {renderButton(props, 'Blog')}
        {renderButton(props, 'Gallery')}
        {renderButton(props, 'ErrorBoundary')}
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey80,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '150%',
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.green10,
  },
});
