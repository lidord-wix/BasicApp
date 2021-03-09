import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image, Assets, Colors} from 'react-native-ui-lib';

class Tab1 extends Component {
  state = {};
  render() {
    return (
      <View>
        <Image
          marginT-16
          source={Assets.icons.x}
          tintColor={Colors.green50}
          resizeMode="repeat"
          style={styles.crown}
        />
        <View center paddingH-30 marginT-20>
          <Text marginT-20 grey10 center text70BO>
            This app is based on RNUI and RNN
          </Text>
          <Image
            marginT-40
            style={styles.logo}
            source={require('../../assets/RNN.png')}
          />
          <Text grey10 center>
            RNN (React Native Navigation) provides 100% native platform
            navigation on both iOS and Android for React Native apps.
          </Text>
          <Image
            marginT-40
            style={styles.logo}
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
            style={styles.QR}
            source={{
              uri:
                'https://user-images.githubusercontent.com/1780255/76164023-f2171400-6153-11ea-962d-d57b64a08a80.png',
            }}
          />
        </View>
      </View>
    );
  }
}

export default Tab1;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100
  },
  QR: {
    width: 140,
    height: 140
  },
  crown: {
    position: 'absolute', width: '100%', height: 16
  }
})