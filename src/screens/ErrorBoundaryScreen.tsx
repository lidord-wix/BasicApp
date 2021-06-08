import React, {PureComponent, Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Button,
  Colors,
  Image,
  Typography,
  UIComponent,
} from 'react-native-ui-lib';

const playImg = require('../assets/Play.png');
const errorImg = require('../assets/Error.png');

// @ts-ignore
UIComponent.defaultProps = {};
//@ts-ignore
UIComponent.defaultProps.renderError = (
  <View absF bg-white flex centerH paddingH-20>
    <Text center text50 color={Colors.grey30} marginT-100>
      Oops... Looks Like Something Went Wrong!
    </Text>
    <Image
      marginT-50
      source={errorImg}
      resizeMode={'center'}
      width={300}
      height={300}
    />
    <Text marginT-50 text60M color={Colors.grey20}>
      Please refresh the app and try again
    </Text>
  </View>
);

class ErrorComp extends Component {
  state = {
    hasError: false,
  };

  onPress = () => {
    this.setState({hasError: true});
  };

  render() {
    if (this.state.hasError) {
      throw new Error('error');
    }

    return (
      <Button
        labelStyle={styles.button}
        label={'Trigger Error'}
        onPress={this.onPress}
      />
    );
  }
}

class ErrorBoundaryScreen extends PureComponent {
  state = {};

  render() {
    return (
      <View bg-white center paddingH-20 flex>
        <View row center flex-2>
          <View bg-grey30 marginR-20 width={8} height={8} br100 />
          <View bg-grey30 marginR-20 width={8} height={8} br100 />
          <View bg-green30 marginR-20 width={16} height={16} br100 />
          <View bg-grey30 marginR-20 width={8} height={8} br100 />
          <View bg-grey30 width={8} height={8} br100 />
        </View>
        <View flex marginB-20>
          <Text text50 center>
            Error boundary example
          </Text>
          <Text text60M marginT-20 color={Colors.grey30} center>
            Press on the button to see your fallback UI
          </Text>
        </View>
        <View center flex-4>
          <Image height={300} width={400} resizeMode={'stretch'} source={playImg} />
        </View>
        <View flex-2>
          <ErrorComp />
        </View>
      </View>
    );
  }
}

export default ErrorBoundaryScreen;

const styles = StyleSheet.create({
  button: {
    ...Typography.text60,
  },
});
