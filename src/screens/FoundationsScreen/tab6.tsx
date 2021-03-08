import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, BorderRadiuses, Colors, Spacings} from 'react-native-ui-lib';
import _ from 'lodash';

class Tab6 extends Component {

    render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Text marginT-20 text60BO grey10 center>
            Border Radius Usage Example:
          </Text>
          <View
            center
            marginV-20
            bg-grey60
            style={{borderRadius: BorderRadiuses.br20, width: 220}}>
            <Text marginV-10 grey10 center>
              {'<View br30 bg-green50/>'}
            </Text>
            <View
              bg-green50
              marginB-10
              br30
              style={{width: Spacings.s8, height: Spacings.s8}}
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
                <View style={{borderRadius: value}} bg-green40 width='40%' height='40%' />
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
  });
  