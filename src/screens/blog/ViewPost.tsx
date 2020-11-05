import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

class ViewPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
    somePropToPass: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
  }

  onPostDeletePressed() {
    Navigation.pop(this.props.componentId);
    setTimeout(() => {
      alert('Post deleted');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ViewPost Screen</Text>
        <Text>{this.props.somePropToPass}</Text>
        <Text marginT-20 onPress={this.onPostDeletePressed} color={Colors.red30}>
          Delete Post
        </Text>
      </View>
    );
  }
}
export default ViewPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
