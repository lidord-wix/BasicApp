import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Spacings, Colors} from 'react-native-ui-lib';
import _ from 'lodash';

class Tab4 extends Component {
  state = {};
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View paddingH-18>
          <Text marginT-30 text60BO center>
            Spacings Usage Example:
          </Text>
          <View center marginV-20 marginH-40 bg-grey60 br20>
            <Text marginV-10 center>
              {'{width: Spacings.s8, height: Spacings.s8}'}
            </Text>
            <View
              bg-green50
              marginB-10
              width={Spacings.s8}
              height={Spacings.s8}
            />
          </View>
          <View>
            {_.map(Spacings, (value, key) => {
              if (!_.isNumber(value)) {
                return;
              }

              return (
                <View key={key} marginB-12>
                  <View row spread bottom>
                    <Text text60>{key}</Text>
                    <Text text90 color={Colors.grey30}>
                      {value}
                    </Text>
                  </View>
                  <View height={value} bg-green70 right />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Tab4;

const styles = StyleSheet.create({
  crown: {
    position: 'absolute',
    width: '100%',
    height: 16,
  },
});
