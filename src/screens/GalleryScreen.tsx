import React, {PureComponent} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Image, Colors, BorderRadiuses, Spacings} from 'react-native-ui-lib';
import _ from 'lodash';

class GalleryScreen extends PureComponent {
  state = {};

  renderImage = () => {
    const randomImageNumber = Math.floor(Math.random() * 500 + 1);
    return <Image key={randomImageNumber} source={{uri: `https://picsum.photos/200/200/?image=${randomImageNumber}`}} style={styles.image}/>;
  }

  renderRow = () => {
    return (
      <View row center>
        {_.times(3, this.renderImage)}
      </View>
    );
  }

  renderGallery = () => {
    return (
      <View>
      {_.times(10, this.renderRow)}
    </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <Text center text30 dark10 marginT-50>
          Gallery Screen
        </Text>
        <View flex-wrap>
          {this.renderGallery()}
        </View>
      </ScrollView>
    );
  }
}

export default GalleryScreen;

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    borderRadius: BorderRadiuses.br10,
    margin: Spacings.s2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70
  },
});
