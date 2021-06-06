import React, {PureComponent, Component} from 'react';
import {
  View,
  Text,
  Button,
  Colors,
  Image,
  Typography,
  UIComponent,
} from 'react-native-ui-lib';

const purchaseImg = require('../assets/purchase.png');
const errorImg = require('../assets/Error.png');

// @ts-ignore
UIComponent.defaultProps = {};
//@ts-ignore
UIComponent.defaultProps.renderError = (
  <View bg-white flex centerH paddingH-20>
    <Text center text50 grey30 marginT-100>
      Oops... Looks Like Something Went Wrong!
    </Text>
    <Image marginT-50 source={errorImg} width={300} height={300} />
    <Text marginT-50 text60M grey20>
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
        marginT-50
        backgroundColor={Colors.green30}
        labelStyle={Typography.text60}
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
      <View
        bg-white
        paddingH-20
        style={{alignItems: 'center', flex: 1, backgroundColor: 'white'}}>
        <View row marginT-80 center>
          <View bg-grey30 marginR-20 width={8} height={8} br100 />
          <View bg-grey30 marginR-20 width={8} height={8} br100 />
          <View bg-grey30 marginR-20 width={8} height={8} br100 />
          <View bg-green30 marginR-20 width={16} height={16} br100 />
          <View bg-grey30 width={8} height={8} br100 />
        </View>
        <Text marginT-60 text50 grey30 center>
          Error boundary example 
        </Text>
        <Text marginT-20 text60M grey30 center>
          Press on the button to see your fallback UI
        </Text>
        <Image marginT-50 width={300} height={300} source={purchaseImg} />
        <ErrorComp />
      </View>
    );
  }
}

export default ErrorBoundaryScreen;
