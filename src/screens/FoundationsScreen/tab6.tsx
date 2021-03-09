import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  BorderRadiuses,
  Colors,
  Spacings,
  Image,
  Assets,
} from 'react-native-ui-lib';
import _ from 'lodash';

class Tab6 extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          marginT-16
          source={Assets.icons.x}
          tintColor={Colors.green50}
          resizeMode="repeat"
          style={styles.crown}
        />

        <Text marginT-40 text60BO grey10 center>
          Border Radius Usage Example:
        </Text>
        <View center marginV-20 bg-grey60 br20 width={220}>
          <Text marginV-10 grey10 center>
            {'<View br30 bg-green50/>'}
          </Text>
          <View
            bg-green50
            marginB-10
            br30
            width={Spacings.s8}
            height={Spacings.s8}
          />
        </View>
        <View>
          {_.map(BorderRadiuses, (value, key) => {
            return (
              <View center key={key} height={150} width={150}>
                <View style={styles.labelContainer}>
                  <Text dark30 text50>
                    {key}
                  </Text>
                  <Text dark30 text70>
                    ({value})
                  </Text>
                </View>
                <View
                  style={{borderRadius: value}}
                  bg-green40
                  width="40%"
                  height="40%"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Tab6;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  crown: {
    position: 'absolute',
    width: '100%',
    height: 16,
  },
});
