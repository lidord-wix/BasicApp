import React, {PureComponent} from 'react';
import {View, Text} from 'react-native-ui-lib';

class GalleryScreen extends PureComponent {
  state = {};

  render() {
    return (
      <View>
        <Text style={{marginTop: 360, marginLeft: 130, fontSize: 30}}>
          Gallery Screen
        </Text>
      </View>
    );
  }
}

export default GalleryScreen;
