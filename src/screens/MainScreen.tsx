import React, {PureComponent} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, Button, BorderRadiuses, Colors} from 'react-native-ui-lib';
import {registerScreens} from '../screens';

registerScreens();

const renderButton = (props: any, label: string, componentName: string, title: string) => {
  return (
    <Button
      marginT-10
      marginH-90
      borderRadius={BorderRadiuses.br30}
      backgroundColor={Colors.green30}
      label={label}
      labelStyle={{color: Colors.white}}
      text60
      onPress={() =>
        Navigation.push(props.componentId, {
          component: {
            name: componentName,
            options: {
              topBar: {
                title: {
                  text: title,
                  color: Colors.white,
                },
                backButton: {
                  color: 'white',
                },
                background: {
                  color: Colors.green30,
                },
              },
            },
          },
        })
      }
    />
  );
};

const MainScreen = (props) => {
  return (
    <View marginH-20 marginT-100>
      <Text center text30 dark10>
        Main Screen
      </Text>
      <View center marginT-100></View>
      {renderButton(props, 'Login Screen', 'LoginScreen', 'Log in')}
      {renderButton(props, 'Blog Screen', 'BlogScreen', 'Blog')}
    </View>
  );
};

export default MainScreen;
