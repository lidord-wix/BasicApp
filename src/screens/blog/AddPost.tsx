import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Colors, TextField, TextArea} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';

class AddPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.onChangeText = this.onChangeText.bind(this);
    this.onSavePressed = this.onSavePressed.bind(this);
  }

  static get options() {
    return {
      topBar: {
        background: {
          color: Colors.green30,
        },
        title: {
          text: 'Add Post',
          color: Colors.white,
        },
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: false,
            color: Colors.white,
          },
        ],
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
    } else if (buttonId === 'saveBtn') {
      this.onSavePressed();
    }
  }

  onChangeText(text) {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: !!text,
            color: Colors.white,
            fontWeight: 'bold',
          },
        ],
      },
    });
  }

  onSavePressed() {
    Navigation.dismissModal(this.props.componentId);
    //In here, we will send a request for saving the post.
    setTimeout(() => {
      alert('post was saved');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddPost Screen</Text>
        <View style={styles.textArea}>
          <TextArea
            placeholder="Start writing to enable the save btn"
            onChangeText={this.onChangeText}
          />
        </View>
      </View>
    );
  }
}
export default AddPost;
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
  textArea: {
    borderWidth: 0.5,
    borderColor: Colors.grey30,
    width: '90%',
    height: '80%',
    paddingHorizontal: 10,
  },
});
