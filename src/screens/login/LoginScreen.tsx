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
import SplashScreen from 'react-native-splash-screen';
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
    SplashScreen.hide();
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
      <View center flex>
        <Image
          source={require('../../assets/greenBackground.jpg')}
          style={styles.background}
        />
        <View flex-2 centerV>
          <Text text40L color={Colors.white}>
            BasicApp
          </Text>
        </View>
        <View flex centerV>
          <Text text20BL color={Colors.white}>
            Welcome!
          </Text>
        </View>
        <View style={styles.inputView} flex-4>
          <View flex centerV>
            <TextField
              floatingPlaceholder
              floatOnFocus
              floatingPlaceholderColor={Colors.white}
              underlineColor={Colors.white}
              white
              placeholder="Email:"
              placeholderTextColor={Colors.white}
              onChangeText={(email: string) => this.setState({email})}
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
              onChangeText={(password: string) => this.setState({password})}
            />
            <Button
              link
              white
              label={'Forgot Password?'}
              onPress={this.remindPassword}
            />
          </View>
          <View centerV flex>
            <Button
              marginH-40
              green20
              backgroundColor={Colors.white}
              text60
              label={'Login'}
              onPress={this.login}
            />
            <Button
              marginH-40
              link
              white
              text60
              label={'Sign Up'}
              onPress={this.signUp}
              marginT-14
            />
          </View>
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
    resizeMode: 'stretch',
    height: '100%',
  },
});
