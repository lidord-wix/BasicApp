import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Image} from 'react-native-ui-lib';

class Tab1 extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <View center paddingH-30 marginT-20>
          <Text marginT-10 center text60BO>
            This app is based on RNUI and RNN
          </Text>
          <Image
            marginT-40
            style={styles.logo}
            source={require('../../assets/RNN.png')}
          />
          <Text center>
            RNN (React Native Navigation) provides 100% native platform
            navigation on both iOS and Android for React Native apps.
          </Text>
          <Image
            marginT-40
            style={styles.logo}
            source={require('../../assets/RNUI.png')}
          />
          <Text center>
            RNUI (React Native UI Lib) is a UI Toolset & Components Library for
            React Native
          </Text>
          <Text marginT-40 center text70BO>
            Download the RNUI's expo app to discover more UI components and
            features
          </Text>
          <Image
            marginV-20
            style={styles.QR}
            source={{
              uri: 'https://user-images.githubusercontent.com/1780255/76164023-f2171400-6153-11ea-962d-d57b64a08a80.png',
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Tab1;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  QR: {
    width: 140,
    height: 140,
  },
  crown: {
    position: 'absolute',
    width: '100%',
    height: 16,
  },
});
