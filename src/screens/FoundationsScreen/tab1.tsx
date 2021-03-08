import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native-ui-lib';

class Tab1 extends Component {
  state = {};
  render() {
    return (
      <View center paddingH-30>
        <Text marginT-20 grey10 center text70BO>
          This app is based on RNUI and RNN
        </Text>
        <Image
          marginT-40
          style={{width: 100, height: 100}}
          source={require('../../assets/RNN.png')}
        />
        <Text grey10 center>
          RNN (React Native Navigation) provides 100% native platform navigation
          on both iOS and Android for React Native apps.
        </Text>
        <Image
          marginT-40
          style={{width: 100, height: 100}}
          source={require('../../assets/RNUI.png')}
        />
        <Text grey10 center>
          RNUI (React Native UI Lib) is a UI Toolset & Components Library for
          React Native
        </Text>
        <Text marginV-12 grey10 center text70BO>
          Download the RNUI's expo app to discover more UI components and
          features
        </Text>
        <Image
          style={{width: 140, height: 140}}
          source={{
            uri:
              'https://user-images.githubusercontent.com/1780255/76164023-f2171400-6153-11ea-962d-d57b64a08a80.png',
          }}
        />
      </View>
    );
  }
}

export default Tab1;
