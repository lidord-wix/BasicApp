import React, {PureComponent} from 'react';
import {Navigation} from 'react-native-navigation';
import {ScrollView} from 'react-native';
import {View, Text, Button, BorderRadiuses, Colors} from 'react-native-ui-lib';
import {registerScreens} from '../screens';
import {push} from 'rnn-copilot';

registerScreens();

const renderButton = (props: any, label: string) => {
  return (
    <Button
      marginT-12
      marginH-100
      borderRadius={BorderRadiuses.br30}
      backgroundColor={Colors.green30}
      label={`${label} Screen`}
      labelStyle={{color: Colors.white}}
      text60
      onPress={() =>
        Navigation.push(props.componentId, {
          component: {
            name: `${label}Screen`,
            options: {
              topBar: {
                title: {
                  text: label,
                  color: Colors.white,
                },
                backButton: {
                  title: 'Main Screen',
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
    <ScrollView>
      <Text center text30 dark10 marginT-50>
        Main Screen
      </Text>
      <View centerV marginT-160>
      {renderButton(props, 'Login')}
      {renderButton(props, 'Blog')}
      {renderButton(props, 'Gallery')}
      {renderButton(props, 'Store')}
      </View>
    </ScrollView>
  );
};

export default MainScreen;
