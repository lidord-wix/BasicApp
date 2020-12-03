import React, {PureComponent} from 'react';
import _ from 'lodash';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import {View ,Text, Colors, ListItem, Image, BorderRadiuses} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {postsStore} from './posts.store';
import * as postsActions from './posts.actions';
import {push, TopBar, StaticOptions} from 'rnn-copilot';

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

  // static options() {
  //   return (
  //     new StaticOptions()
  //       .withTopBar(new TopBar().withRightButton({id: 'addPost', text: 'Add'}))
  //       .get()
  //   );
  // }

  topBar = new TopBar(this.props.componentId).withRightButton({id: 'addPost', text: 'Add'});

  componentDidMount() {
    this.topBar.update();
    postsActions.fetchPosts();
  }

  navigationButtonPressed({buttonId}: any) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
  }

  pushViewPostScreen = (post) => {
    const ViewPostTopBar = new TopBar().withOptions({backButton: {color: Colors.green10}, background: {color: Colors.white}});
    push('blog.ViewPost', this.props.componentId).withProps({post}).withTopBar(ViewPostTopBar).go();
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
      <ListItem.Part middle column>
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
          ItemSeparatorComponent={() => <View style={styles.border}/>}
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
    marginLeft: 100
  }
});
