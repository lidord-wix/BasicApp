import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {View, Text, Colors, TextField, Button, Shadows} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as usersActions from './users.actions';
import {usersStore} from './users.store';
import filter from 'lodash/filter';
import {connect} from 'remx';

class SignUpScreen extends Component {
  static propTypes = {
    componentId: PropTypes.string,
    users: PropTypes.array,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
    // this.onSavePressed = this.onSavePressed.bind(this);

    this.state = {
      email: undefined,
      password: undefined,
      passwordConfirmation: undefined,
    };
  }

  componentDidMount() {
    usersActions.fetchUsers();
  }

  static get options() {
    return {
      topBar: {
        background: {
          color: Colors.green30,
        },
        title: {
          text: 'Sign Up',
          color: Colors.white,
        },
        leftButtons: [
          {
            id: 'cancelBtn',
            text: 'Cancel',
            color: Colors.white,
          },
        ],
      },
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'cancelBtn') {
      Navigation.dismissModal(this.props.componentId);
    }
  }

  onChangeEmail = (email: string) => {
    this.setState({email});
  };

  onChangePassword = (password: string) => {
    this.setState({password});
  };

  onChangePasswordConfirmation = (passwordConfirmation: string) => {
    this.setState({passwordConfirmation});
  };

  onSignUpPressed = () => {
    const {users} = this.props;
    const {email, password, passwordConfirmation} = this.state;
    console.warn(users);
    if (!email || !password || !passwordConfirmation) {
        Alert.alert('Please fill all fields');
      }
    else if (password !== passwordConfirmation) {
        Alert.alert('Please confirm your password again');
      }
    else if (filter(users, (user) => user.email === email)[0]) {
        Alert.alert('This email is already registered');
      }
    else {
        Navigation.dismissModal(this.props.componentId);
        usersActions.signUpUser({
        email: email,
        password: password,
        });
    }
  };

  render() {
    return (
      <View centerH>
        <Text green20 text50L marginT-40>
          BasicApp
        </Text>
        <Text green20 text30BL marginT-120>
          Please Sign Up:
        </Text>
        <View marginT-40 style={styles.inputView}>
          <TextField
            floatingPlaceholder
            floatOnFocus
            floatingPlaceholderColor={Colors.green30}
            underlineColor={Colors.green30}
            green10
            placeholder="Email:"
            placeholderTextColor={Colors.green30}
            onChangeText={(email) => this.setState({email})}
          />
          <TextField
            floatingPlaceholder
            floatOnFocus
            floatingPlaceholderColor={Colors.green30}
            underlineColor={Colors.green30}
            green10
            secureTextEntry
            placeholder="Password:"
            placeholderTextColor={Colors.green30}
            onChangeText={(password) => this.setState({password})}
          />
          <TextField
            floatingPlaceholder
            floatOnFocus
            floatingPlaceholderColor={Colors.green30}
            underlineColor={Colors.green30}
            green10
            secureTextEntry
            placeholder="Confirm password:"
            placeholderTextColor={Colors.green30}
            onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
          />
          <Button
            marginH-40
            marginT-100
            bg-white
            green20
            text60
            style={styles.signUp}
            label={'Sign Me Up!'}
            onPress={this.onSignUpPressed}
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

export default connect(mapStateToProps)(SignUpScreen);

const styles = StyleSheet.create({
    inputView: {
      width:"70%",
    },
    signUp: {
      ...Shadows.sh10.bottom
    }
  });
  