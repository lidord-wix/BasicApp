import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  View,
  Text,
  Button,
  BorderRadiuses,
  Colors,
  Assets,
  Image,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {registerScreens} from '../screens';
import {push, TopBar} from 'rnn-copilot';

registerScreens();

const renderButton = (props: any, label: string) => {
  const topBar = new TopBar()
    .withTitle(label)
    .withOptions({backButton: {title: 'Main Screen'}});
  return (
    <TouchableOpacity
      marginT-12
      marginH-100
      br30
      bg-green30
      row
      spread
      style={styles.button}
      onPress={() =>
        push(`${label}Screen`, props.componentId).withTopBar(topBar).go()
      }>
      <Text marginV-10 marginL-16 white text60>
        {label}
      </Text>
      <Image
        tintColor={Colors.white}
        marginT-16
        marginR-14
        source={Assets.icons.chevronRight}
      />
    </TouchableOpacity>
  );
};

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/greenBackground.jpg')}
        resizeMode="stretch"
        style={styles.background}
      />
      <Text center text30BL dark10 marginT-50>
        Main Screen
      </Text>
      <View marginT-160>
        {renderButton(props, 'Login')}
        {renderButton(props, 'Foundations')}
        {renderButton(props, 'Blog')}
        {renderButton(props, 'Gallery')}
        {renderButton(props, 'Store')}
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
    height: '150%'
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.green10
  }
});
