import React, {PureComponent} from 'react';
import _ from 'lodash';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import {Text, Colors, ListItem, Image, BorderRadiuses} from 'react-native-ui-lib';
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
        options: {
          topBar: {
            backButton: {
              color: Colors.green30,
            },
            background: {
              color: Colors.white,
            },
          },
        },
        passProps: {
          post,
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
    <ListItem
      activeBackgroundColor={Colors.green20}
      activeOpacity={0.1}
      height={100}
      onPress={() => this.pushViewPostScreen(item)}
    >
      <ListItem.Part left>
        <Image
          source={{uri: item.img}}
          style={styles.image}
        />
      </ListItem.Part>
      <ListItem.Part middle column containerStyle={styles.border}>
        <ListItem.Part containerStyle={{marginBottom: 2}}>
          <Text dark10 text70 numberOfLines={1}>{item.title}</Text>
        </ListItem.Part>
        <ListItem.Part>
          <Text text80 dark40 numberOfLines={2}>{item.text}</Text>
        </ListItem.Part>
      </ListItem.Part>
    </ListItem>
  );

  postKeyExtractor = (item) => `${item.id}-key`;

  render() {
    const {posts} = this.props;
    return (
      <ScrollView>
        <Text center marginV-40 text30 dark10>
          Posts list:
        </Text>
        <FlatList
          data={posts}
          keyExtractor={this.postKeyExtractor}
          renderItem={this.renderItem}
        />
      </ScrollView>
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
  image: {
    width: 74,
    height: 74,
    borderRadius: BorderRadiuses.br20,
    marginHorizontal: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark60,
    paddingRight: 16
  }

});
