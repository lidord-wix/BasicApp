import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Colors, TextField, TextArea} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as postsActions from './posts.actions';

class AddPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSavePressed = this.onSavePressed.bind(this);

    this.state = {
      title: '',
      text: '',
    };
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

  onChangeTitle = (title) => {
    this.setState({title});
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'saveBtn',
            text: 'Save',
            enabled: !!title,
            color: Colors.white,
          },
        ],
      },
    });
  };

  onChangeText = (text) => {
    this.setState({text});
  };

  onSavePressed = () => {
    Navigation.dismissModal(this.props.componentId);
    const randomImageNumber = Math.floor(Math.random() * 500 + 1);
    postsActions.addPost({
      title: this.state.title,
      text: this.state.text,
      img: `https://picsum.photos/200/200/?image=${randomImageNumber}`,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text marginB-80 style={styles.text}>Add Your New Post</Text>
        <TextField
          placeholder="Add title to your post"
          value={this.state.title}
          onChangeText={this.onChangeTitle}
          underlineColor={Colors.green50}
        />
        <View style={styles.textArea}>
          <TextArea
            placeholder="Write your post here"
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
    height: '40%',
    paddingHorizontal: 10,
  },
});
