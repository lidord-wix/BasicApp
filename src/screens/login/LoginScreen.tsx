import React, {PureComponent} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
  View,
  Text,
  TextField,
  Colors,
  Button,
  Image,
} from 'react-native-ui-lib';
import {push, TopBar, StaticOptions} from 'rnn-copilot';
import PropTypes from 'prop-types';
import {usersStore} from './users.store';
import * as usersActions from './users.actions';
import {connect} from 'remx';
import find from 'lodash/find';

class LoginScreen extends PureComponent {
  state = {
    email: undefined,
    password: undefined,
  };

  static propTypes = {
    users: PropTypes.array,
  };

  static options() {
    return new StaticOptions()
      .withTopBar(new TopBar().withVisibility(false))
      .get();
  }

  componentDidMount() {
    usersActions.fetchUsers();
  }

  remindPassword = () => {
    return;
  };

  login = () => {
    const {email, password} = this.state;
    const {users} = this.props;
    const user = find(users, (user) => user.email === email);

    if (user && user.password === password) {
      const loginTopBar = new TopBar()
        .withTitle('Basic App')
        .withOptions({backButton: {title: 'Log out'}});
      push('MainScreen', this.props.componentId).withTopBar(loginTopBar).go();
    } else {
      return Alert.alert("User doesn't exist");
    }
  };

  signUp = () => {
    push('login.SignUpScreen', this.props.componentId).asModal().go();
  };

  render() {
    return (
      <View centerH paddingT-140 flex>
        <Image
          source={require('../../assets/greenBackground.jpg')}
          height={'120%'}
          resizeMode={'stretch'}
          style={styles.background}
        />
        <Text white text40L marginT-0>
          BasicApp
        </Text>
        <Text white text20BL marginT-100>
          Welcome!
        </Text>
        <View marginT-40 style={styles.inputView}>
          <TextField
            floatingPlaceholder
            floatOnFocus
            floatingPlaceholderColor={Colors.white}
            underlineColor={Colors.white}
            white
            placeholder="Email:"
            placeholderTextColor={Colors.white}
            onChangeText={(email) => this.setState({email})}
          />
          <TextField
            floatingPlaceholder
            floatOnFocus
            floatingPlaceholderColor={Colors.white}
            underlineColor={Colors.white}
            white
            secureTextEntry
            placeholder="Password:"
            placeholderTextColor={Colors.white}
            onChangeText={(password) => this.setState({password})}
          />
          <Button
            link
            white
            label={'Forgot Password?'}
            onPress={this.remindPassword}
          />
          <Button
            marginH-40
            marginT-120
            bg-white
            green20
            text60
            label={'Login'}
            onPress={this.login}
          />
          <Button
            marginH-40
            marginT-14
            link
            white
            text60
            label={'Sign Up'}
            onPress={this.signUp}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps() {
  return {
    users: usersStore.getUsers(),
  };
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  inputView: {
    width: '70%',
  },
  background: {
    position: 'absolute',
  },
});
