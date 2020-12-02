import React, {PureComponent} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Image, Colors, BorderRadiuses, Spacings} from 'react-native-ui-lib';
import _ from 'lodash';


const mediaUrl = 'https://picsum.photos/200/200/?image=1';

class GalleryScreen extends PureComponent {
  state = {};

  renderGallery = () => {
    return (
      <View>
        <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=156'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=235'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=334'}} style={styles.image}/>
        </View>
        <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=411'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=52'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=65'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=7'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=87'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=90'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=10'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=11'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=12'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=13'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=14'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=15'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=16'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=17'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=18'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=19'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=20'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=21'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=22'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=23'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=24'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=25'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=26'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=27'}} style={styles.image}/>
      </View>
      <View row center>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=28'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=29'}} style={styles.image}/>
          <Image source={{uri: 'https://picsum.photos/200/200/?image=30'}} style={styles.image}/>
      </View>
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
