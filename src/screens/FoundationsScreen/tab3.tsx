import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {View, Text, BorderRadiuses, Colors, Typography, Toast} from 'react-native-ui-lib';
import _ from 'lodash';

const baseColors = ['dark', 'blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'purple', 'violet'];

class Tab3 extends Component {
  state = {};

  onPress(key, value) {
    this.setState({key});
    if (_.includes(key, '60') || _.includes(key, '70') || _.includes(key, '80') || _.includes(key, 'white')) {
      this.setState({color: Colors.dark10});
    } else {
      this.setState({color: Colors.white});
    }
    this.setState({background: value});
    this.setState({showToast: true});
  }

  renderColors() {
    return (
        <ScrollView style={{backgroundColor: Colors.grey80, marginBottom: 200}}>
        <View style={styles.pallete}>
          {_.map(Colors, (value, key) => {
            if (!_.isFunction(value)) {
              return (
                <TouchableOpacity key={key} onPress={() => this.onPress(key, value)}>
                  <View style={[styles.palletEeColor, {backgroundColor: value}]}/>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        {_.map(baseColors, (baseColor) => {
          const baseColorTints = _.pickBy(Colors, (color, key) => key.includes(baseColor));
          return (
            <View key={baseColor} style={{paddingLeft: 10}}>
              <Text style={[Typography.text60, {marginBottom: 2, color: Colors.dark30}]}>{baseColor}s</Text>
              <ScrollView
                horizontal
                contentContainerStyle={{marginBottom: 20}}
                showsHorizontalScrollIndicator={false}
              >
                {_.map(baseColorTints, (value, key) => {
                  return (
                    <View key={key} style={[styles.colorBlock, {backgroundColor: value}]}>
                      <Text style={styles.colorBlockLabel}>
                        {key}: {value}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>

    );
  }

  render() {
    return (
      <View useSafeArea style={{marginHorizontal: 6}}>
        <Toast
          message={this.state.key}
          color={this.state.color}
          backgroundColor={this.state.background}
          autoDismiss={2000}
          allowDismiss
          onDismiss={() => this.setState({showToast: false})}
          visible={this.state.showToast}
        />
          <Text marginT-20 text60BO grey10 center>
            Colors Usage Example:
          </Text>
          <View
            marginV-20
            marginH-84
            bg-grey60
            style={{borderRadius: BorderRadiuses.br20}}>
            <Text marginV-10 grey10 center>
              {'<Text green30>example</Text>'}
            </Text>
            <Text marginB-10 center text40M green30>
              example
            </Text>
          </View>
          {this.renderColors()}
      </View>
    );
  }
}

export default Tab3;


const PALLETE_COLOR_MARGIN = 5;
const PALLETE_COLOR_WIDTH = ((400 - (2 * 10)) / 8) - (PALLETE_COLOR_MARGIN * 2);
const styles = StyleSheet.create({
  container: {
  },
  pallete: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  palletEeColor: {
    width: PALLETE_COLOR_WIDTH,
    height: PALLETE_COLOR_WIDTH,
    borderRadius: PALLETE_COLOR_WIDTH / 2,
    margin: PALLETE_COLOR_MARGIN,
  },
  colorBlock: {
    width: 400 * 0.35,
    height: 400 * 0.25,
    marginRight: 10,
    justifyContent: 'flex-end',
  },
  colorBlockLabel: {
    backgroundColor: Colors.white,
    opacity: 0.5,
    ...Typography.text90,
    fontWeight: '500',
  },
});
