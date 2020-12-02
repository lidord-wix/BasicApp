import React, {PureComponent} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {View, Text, TextField, Colors, Button} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
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
      Navigation.push(this.props.componentId, {
        component: {
          name: 'MainScreen',
          options: {
            topBar: {
              title: {
                text: 'Basic App',
                color: Colors.white,
              },
              backButton:{
                title: 'Log out',
                color: Colors.white
              },
              background: {
                color: Colors.green30,
              },
            },
          },
        },
      });
    } else {
      return Alert.alert("User doesn't exist");
    }
  };

  signUp = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'login.SignUpScreen',
            },
          },
        ],
      },
    });
  };

  render() {
    return (
      <View centerH bg-green30 flex>
        <Text white text40L marginT-120>
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
            green80
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
});
