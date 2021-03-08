import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Text, Spacings, BorderRadiuses} from 'react-native-ui-lib';
import _ from 'lodash';

class Tab4 extends Component {
  state = {};
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View paddingH-18>
          <Text marginT-20 text60BO grey10 center>
            Spacings Usage Example:
          </Text>
          <View
            center
            marginV-20
            marginH-40
            bg-grey60
            style={{borderRadius: BorderRadiuses.br20}}>
            <Text marginV-10 grey10 center>
              {'{width: Spacings.s8, height: Spacings.s8}'}
            </Text>
            <View
              bg-green50
              marginB-10
              style={{width: Spacings.s8, height: Spacings.s8}}
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
                    <Text text60 dark10>
                      {key}
                    </Text>
                    <Text dark30 text90>
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
