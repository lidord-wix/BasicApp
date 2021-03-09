import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  Colors,
  Shadows,
  BorderRadiuses,
  Spacings,
} from 'react-native-ui-lib';
import _ from 'lodash';

const VALID_SHADOWS = _.pick(Shadows, ['sh10', 'sh20', 'sh30']);

class Tab5 extends Component {
  renderShadows(shadowsList: any, circle: boolean) {
    return [].concat(
      _.map(shadowsList, (value: any, key: string) => this.renderShadow(value, key, circle)),
    );
  }

  renderShadow(shadow: any, name: string, isCircle: boolean) {
    const borderRadius = isCircle ? 120 / 2 : 2;
    const keySuffix = isCircle ? '_circle' : '_square';

    return (
      <View
        key={`${name}${keySuffix}`}
        style={[
          styles.innerCircle,
          styles.circle,
          {borderRadius},
          shadow.bottom,
        ]}>
        <Text text50 grey30>
          {name}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <Text marginT-20 text60BO grey10 center>
          Shadows Usage Example:
        </Text>
        <View
          center
          marginV-20
          marginH-84
          bg-white
          style={{borderRadius: BorderRadiuses.br20, ...Shadows.sh20.bottom}}>
          <Text marginV-10 grey10 center>
            {'{...Shadows.sh30.bottom}'}
          </Text>
          <View
            bg-white
            marginB-10
            style={{
              width: Spacings.s8,
              height: Spacings.s8,
              ...Shadows.sh30.bottom,
            }}
          />
        </View>
        <View style={[styles.container]}>
          <View style={styles.subContainer}>
            {this.renderShadows(VALID_SHADOWS, true)}
          </View>
          <View style={styles.subContainer}>
            {this.renderShadows(VALID_SHADOWS, false)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Tab5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    margin: 40,
  },
  innerCircle: {
    width: 120,
    height: 120,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
});
