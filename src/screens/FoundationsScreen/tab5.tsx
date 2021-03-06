import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  Colors,
  Shadows,
  BorderRadiuses,
  Spacings,
  Card,
} from 'react-native-ui-lib';
import _ from 'lodash';

const VALID_SHADOWS = _.pick(Shadows, ['sh10', 'sh20', 'sh30']);

class Tab5 extends Component {
  renderShadows(shadowsList: any, circle: boolean) {
    return [].concat(
      _.map(shadowsList, (value: any, key: string) =>
        this.renderShadow(value, key, circle),
      ),
    );
  }

  renderShadow(shadow: any, name: string, isCircle: boolean) {
    const borderRadius = isCircle ? BorderRadiuses.br100 : BorderRadiuses.br10;
    const keySuffix = isCircle ? '_circle' : '_square';

    return (
      <View
        key={`${name}${keySuffix}`}
        style={[styles.circle, {borderRadius}, shadow.bottom]}>
        <Text text50 color={Colors.grey20}>
          {name}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <Text marginT-30 text60BO center>
          Shadows Usage Example:
        </Text>
        <Card center marginV-20 marginH-84 containerStyle={styles.card}>
          <Text marginV-10 center>
            {'{...Shadows.sh30.bottom}'}
          </Text>
          <View bg-white marginB-10 style={styles.cube} />
        </Card>
        <View style={styles.container}>
          <View>{this.renderShadows(VALID_SHADOWS, true)}</View>
          <View>{this.renderShadows(VALID_SHADOWS, false)}</View>
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
  circle: {
    alignItems: 'center',
    margin: 40,
    width: 120,
    height: 120,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  cube: {width: Spacings.s8, height: Spacings.s8, ...Shadows.sh30.bottom},
  card: {
    backgroundColor: Colors.white,
  },
});
