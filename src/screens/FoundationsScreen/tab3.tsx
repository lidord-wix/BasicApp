import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  BorderRadiuses,
  Colors,
  Typography,
  Toast,
  Card,
} from 'react-native-ui-lib';
import _ from 'lodash';

const baseColors = [
  'dark',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
  'violet',
];

class Tab3 extends Component {
  state = {};

  onPress(key, value) {
    this.setState({key});
    if (
      _.includes(key, '60') ||
      _.includes(key, '70') ||
      _.includes(key, '80') ||
      _.includes(key, 'white')
    ) {
      this.setState({color: Colors.dark10});
    } else {
      this.setState({color: Colors.white});
    }
    this.setState({background: value});
    this.setState({showToast: true});
  }

  renderColors() {
    return (
      <View>
        <View center style={styles.palette}>
          {_.map(Colors, (value, key) => {
            if (!_.isFunction(value)) {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => this.onPress(key, value)}>
                  <View
                    style={[styles.paletteColor, {backgroundColor: value}]}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </View>

        {_.map(baseColors, (baseColor) => {
          const baseColorTints = _.pickBy(Colors, (color, key) =>
            key.includes(baseColor),
          );
          return (
            <View key={baseColor} paddingL-12>
              <Text marginB-4 text60 color={Colors.grey30}>
                {baseColor}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {_.map(baseColorTints, (value, key) => {
                  return (
                    <View
                      key={key}
                      marginB-20
                      style={[styles.colorBlock, {backgroundColor: value}]}>
                      <Text center style={styles.colorBlockLabel}>
                        {key}: {value}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View useSafeArea>
        <Toast
          message={this.state.key}
          color={this.state.color}
          backgroundColor={this.state.background}
          autoDismiss={2000}
          allowDismiss
          onDismiss={() => this.setState({showToast: false})}
          visible={this.state.showToast}
        />
        <ScrollView>
          <Text marginT-30 text60BO center>
            Colors Usage Example:
          </Text>
          <Card marginV-20 marginH-84 containerStyle={styles.card}>
            <Text marginV-10 center>
              {'<Text green30>example</Text>'}
            </Text>
            <Text marginB-10 center text40M color={Colors.green30}>
              example
            </Text>
          </Card>
          {this.renderColors()}
        </ScrollView>
      </View>
    );
  }
}

export default Tab3;

const styles = StyleSheet.create({
  palette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  paletteColor: {
    width: 42,
    height: 42,
    borderRadius: BorderRadiuses.br20,
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.grey50,
  },
  colorBlock: {
    width: 140,
    height: 140,
    marginRight: 10,
    justifyContent: 'center',
    borderRadius: 999,
  },
  colorBlockLabel: {
    backgroundColor: Colors.white,
    opacity: 0.5,
    ...Typography.text80,
    fontWeight: '500',
  },
  card: {
    backgroundColor: Colors.grey60,
  },
});
