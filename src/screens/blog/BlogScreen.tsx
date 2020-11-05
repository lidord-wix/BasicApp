import React, {PureComponent} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {View, Text, Colors, ListItem} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {postsStore} from '../../blog/posts.store';
import * as postsActions from '../../blog/posts.actions';

class BlogScreen extends PureComponent {
  static propTypes = {
    componentId: PropTypes.string,
    posts: PropTypes.array,
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);

    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add',
            color: Colors.white,
          },
        ],
      },
    };
  }

  componentDidMount() {
    postsActions.fetchPosts();
  }

  navigationButtonPressed({buttonId}: any) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
  }

  pushViewPostScreen = (post) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          post,
        },
        options: {
          topBar: {
            title: {
              text: 'Post1',
            },
          },
        },
      },
    });
  };

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'blog.AddPost',
            },
          },
        ],
      },
    });
  }

  renderItem = ({item}) => (
    <ListItem onPress={() => this.pushViewPostScreen(item)}>
      <Text>{item.title}</Text>
    </ListItem>
  );

  postKeyExtractor = (item) => `${item.id}-key`;

  render() {
    return (
      <View>
        <Text style={{marginTop: 360, marginLeft: 130, fontSize: 30}}>
          Blog Screen
        </Text>
        <FlatList
          data={this.props.posts}
          keyExtractor={this.postKeyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

function mapStateToProps() {
  return {
    posts: postsStore.getPosts(),
  };
}

export default connect(mapStateToProps)(BlogScreen);

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
