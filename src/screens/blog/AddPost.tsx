import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Colors,
  TextField,
  TextArea,
  Image,
  Assets,
} from 'react-native-ui-lib';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation/lib/dist/index';
import * as postsActions from './posts.actions';
import {TopBar, StaticOptions} from 'rnn-copilot';

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

  static options() {
    const topBar = new TopBar()
      .withTitle('Add Post')
      .withRightButton({id: 'saveBtn', text: 'Save', enabled: false})
      .withOptions({leftButtons: [{id: 'cancelBtn', text: 'Cancel'}]});
    return new StaticOptions().withTopBar(topBar).get();
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
    const topBar = new TopBar(this.props.componentId);
    topBar
      .withRightButtons([{id: 'saveBtn', text: 'Save', enabled: !!title}])
      .update();
  };

  onChangeText = (text) => {
    this.setState({text});
  };

  getPublisherName = () => {
    const firstNames = [
      'Luci',
      'Tayler',
      'Dolores',
      'Carley',
      'Carolyn',
      'Rian',
      'Haris',
      'Billie-Jo',
      'Jay',
      'Nate',
    ];
    const lastNames = [
      'Devlin',
      'Vang',
      'East',
      'Erickson',
      'Davison',
      'Gibbs',
      'Frost',
      'Leon',
      'Hamer',
      'Simmons',
    ];
    const randomFirst = firstNames[Math.floor(Math.random() * 10)];
    const randomLast = lastNames[Math.floor(Math.random() * 10)];
    return randomFirst + ' ' + randomLast;
  };

  onSavePressed = () => {
    Navigation.dismissModal(this.props.componentId);
    const randomImageNumber = Math.floor(Math.random() * 500 + 1);
    postsActions.addPost({
      title: this.state.title,
      text: this.state.text,
      img: `https://picsum.photos/200/200/?image=${randomImageNumber}`,
      publisher: this.getPublisherName(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          marginT-16
          source={Assets.icons.x}
          tintColor={Colors.green50}
          resizeMode="repeat"
          style={styles.crown}
        />
        <Text marginV-120 style={styles.text}>
          Add Your New Post
        </Text>
        <TextField
          placeholder={'Title'}
          value={this.state.title}
          onChangeText={this.onChangeTitle}
          underlineColor={Colors.green50}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.green20}
          helperText={'Add title to your post'}
          style={styles.title}
        />
        <View bg-white style={styles.textArea}>
          <TextArea
            placeholder="Write your post here"
            onChangeText={this.onChangeText}
            color={Colors.grey10}
          />
        </View>
        <Image
          marginT-60
          source={Assets.icons.x}
          tintColor={Colors.green50}
          resizeMode="repeat"
          style={styles.bottomCrown}
        />
      </View>
    );
  }
}
export default AddPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: '50%',
  },
  crown: {
    position: 'absolute',
    width: '100%',
    height: 16,
  },
  bottomCrown: {
    width: '100%',
    height: 16,
  },
});
