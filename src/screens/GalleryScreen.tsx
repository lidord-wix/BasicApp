import React, {PureComponent} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  Image,
  Colors,
  BorderRadiuses,
  Spacings,
  SegmentedControl
} from 'react-native-ui-lib';
import _ from 'lodash';

class GalleryScreen extends PureComponent {
  state = {grid: true};

  getRandomImageNumber = () => Math.floor(Math.random() * 500 + 1);

  renderImage = (size: number) => {
    const {grid} = this.state;
    const imageNumber = this.getRandomImageNumber();
    return (
      <Image
        key={imageNumber}
        source={{
          uri: `https://picsum.photos/200/200/?image=${imageNumber}`,
        }}
        style={[styles.image, {margin: grid ? Spacings.s2 : Spacings.s1}]}
        width={size}
        height={size}
      />
    );
  };

  renderRow = (index: number, numOfImages: number, imageSize: number) => {
    return (
      <View row center key={index}>
        {_.times(numOfImages, () => this.renderImage(imageSize))}
      </View>
    );
  };

  renderCustomView = () => {
    return (<View centerH>
      {this.renderImage(350)}
      {_.times(30, index => this.renderRow(index, 6, 50))}
    </View>);
  }

  renderGridView = () => {
    return <View>{_.times(15, index => this.renderRow(index, 3, 100))}</View>;
  };

  renderGallery = () => {
    return this.state.grid ? this.renderGridView() : this.renderCustomView();
  };

  updateView = (index: number) => {
    this.setState({grid: !index})
  }

  render() {
    return (
      <ScrollView >
        <Text center text30 margin-30>
          Gallery Screen
        </Text>
        <SegmentedControl segments={[{label: 'Grid'}, {label: 'Custom'}]} onChangeIndex={index => this.updateView(index)}/>
        <View marginT-20 flex-wrap>{this.renderGallery()}</View>
      </ScrollView>
    );
  }
}

export default GalleryScreen;

const styles = StyleSheet.create({
  image: {
    borderRadius: BorderRadiuses.br10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70,
  },
});
