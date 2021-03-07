import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Colors, TextField, TextArea} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as postsActions from './posts.actions';
import {TopBar} from 'rnn-copilot';

class AddPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.state = {
      title: '',
      text: '',
    };
  }
  topBar = new TopBar(this.props.componentId).withTitle('Add Post').withRightButton({id: 'saveBtn', text: 'Save', enabled: false}).withOptions({leftButtons: [{id: 'cancelBtn', text: 'Cancel'}]});

  componentDidMount = () => {
    this.topBar.update();
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
    this.topBar.withRightButtons([{id: 'saveBtn', text: 'Save', enabled: !!title}]).update();
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
          placeholder={"Title"}
          value={this.state.title}
          onChangeText={this.onChangeTitle}
          underlineColor={Colors.green50}
          floatingPlaceholder
          helperText={"Add title to your post"}
          style={styles.title}
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
    width: '85%',
    height: '40%',
    paddingHorizontal: 10,
  },
  title: {
    width: '50%'
  }
});
