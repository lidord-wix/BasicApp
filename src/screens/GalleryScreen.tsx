import React, {PureComponent} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  Image,
  Colors,
  BorderRadiuses,
  Spacings,
  SegmentedControl,
  Carousel,
} from 'react-native-ui-lib';
import _ from 'lodash';

enum GalleryType {
  GRID = 'grid',
  CAROUSEL = 'carousel',
  CUSTOM = 'custom',
}

class GalleryScreen extends PureComponent {
  state = {type: GalleryType.GRID};

  getRandomImageNumber = () => Math.floor(Math.random() * 500 + 1);

  renderImage = (size: number) => {
    const {type} = this.state;
    const imageNumber = this.getRandomImageNumber();
    return (
      <Image
        key={imageNumber}
        source={{
          uri: `https://picsum.photos/200/200/?image=${imageNumber}`,
        }}
        style={[
          styles.image,
          {margin: type === GalleryType.GRID ? Spacings.s2 : Spacings.s1},
        ]}
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
    return (
      <View centerH>
        {this.renderImage(350)}
        {_.times(30, (index) => this.renderRow(index, 6, 50))}
      </View>
    );
  };

  renderGridView = () => {
    return <View>{_.times(15, (index) => this.renderRow(index, 3, 100))}</View>;
  };

  renderCarouselView = () => {
    return (
      <View marginL-s7>
        <Carousel
          loop
          pageControlProps={{limitShownPages: true}}
          pageControlPosition={'under'}>
          {_.times(10, () => this.renderImage(350))}
        </Carousel>
      </View>
    );
  };

  renderGallery = () => {
    const {type} = this.state;
    switch (type) {
      case GalleryType.CAROUSEL:
        return this.renderCarouselView();
      case GalleryType.CUSTOM:
        return this.renderCustomView();
      case GalleryType.GRID:
      default:
        return this.renderGridView();
    }
  };

  updateView = (index: number) => {
    if (index === 0) {
      this.setState({type: GalleryType.GRID});
    } else if (index === 1) {
      this.setState({type: GalleryType.CAROUSEL});
    } else {
      this.setState({type: GalleryType.CUSTOM});
    }
  };

  render() {
    return (
      <ScrollView>
        <Text center text30 margin-30>
          Gallery Screen
        </Text>
        <SegmentedControl
          segments={[{label: 'Grid'}, {label: 'Carousel'}, {label: 'Custom'}]}
          onChangeIndex={(index) => this.updateView(index)}
        />
        <View marginT-20 flex-wrap>
          {this.renderGallery()}
        </View>
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
