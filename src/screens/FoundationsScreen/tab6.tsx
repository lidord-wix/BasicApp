import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  BorderRadiuses,
  Spacings,
  Colors,
  Card,
} from 'react-native-ui-lib';
import _ from 'lodash';

class Tab6 extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text marginT-30 text60BO center>
          Border Radius Usage Example:
        </Text>
        <Card center marginV-20 marginH-84 containerStyle={styles.card}>
          <Text marginV-10 center>
            {'<View br30 bg-green50/>'}
          </Text>
          <View
            bg-green50
            marginB-10
            br30
            width={Spacings.s8}
            height={Spacings.s8}
          />
        </Card>
        <View>
          {_.map(BorderRadiuses, (value, key) => {
            return (
              <View center key={key} height={150} width={150}>
                <View style={styles.labelContainer}>
                  <Text text50>{key}</Text>
                  <Text text70 color={Colors.grey20}>
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
  card: {
    backgroundColor: Colors.grey60,
    width: 220,
  },
});
