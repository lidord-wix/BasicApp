import React from 'react';
import {ScrollView} from 'react-native';
import {View, Text, Button, BorderRadiuses, Colors} from 'react-native-ui-lib';
import {registerScreens} from '../screens';
import {push, TopBar} from 'rnn-copilot';

registerScreens();

const renderButton = (props: any, label: string) => {
  const topBar = new TopBar().withTitle(label).withOptions({backButton: {title: 'Main Screen'}});
  return (
    <Button
      marginT-12
      marginH-100
      borderRadius={BorderRadiuses.br30}
      backgroundColor={Colors.green30}
      label={`${label}`}
      labelStyle={{color: Colors.white}}
      text60
      onPress={() => push(`${label}Screen`, props.componentId).withTopBar(topBar).go()}
    />
  );
};

const MainScreen = (props) => {
  return (
    <ScrollView>
      <Text center text30BL dark10 marginT-50>
        Main Screen
      </Text>
      <View centerV marginT-160>
      {renderButton(props, 'Login')}
      {renderButton(props, 'Foundations')}
      {renderButton(props, 'Blog')}
      {renderButton(props, 'Gallery')}
      {renderButton(props, 'Store')}
      </View>
    </ScrollView>
  );
};

export default MainScreen;
