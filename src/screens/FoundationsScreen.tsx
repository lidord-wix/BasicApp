import React, {PureComponent} from 'react';
import {View, Text, Image, Assets} from 'react-native-ui-lib';

class FoundationsScreen extends PureComponent {
  state = {};

  render() {
    return (
      <View center paddingH-30>
        <Text marginT-20 center text70BO>
          This app is based on RNUI and RNN
        </Text>
        <Image
          marginT-40
          style={{width: 100, height: 100}}
          source={require('../assets/RNN.png')}
        />
        <Text center>
          RNN (React Native Navigation) provides 100% native platform
          navigation on both iOS and Android for React Native apps.
        </Text>
        <Image
          marginT-40
          style={{width: 100, height: 100}}
          source={require('../assets/RNUI.png')}
        />
        <Text center>RNUI (React Native UI Lib) is a UI Toolset & Components Library for React Native</Text>
        <Text marginV-12 center text70BO>
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

export default FoundationsScreen;
