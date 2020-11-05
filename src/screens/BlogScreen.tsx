import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';


class BlogScreen extends PureComponent {

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
            color: Colors.white
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}: any) {
    if (buttonId === 'addPost') {
      this.showAddPostModal();
    }
  }

  pushViewPostScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          somePropToPass: 'Some props that we are passing'
        },
        options: {
          topBar: {
            title: {
              text: 'Post1'
            }
          }
        }
      }
    });
  }

  showAddPostModal() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'blog.AddPost',
          }
        }]
      }
    });
  }





  render() {
    return (
      <View>
        <Text style={{marginTop: 360, marginLeft: 130, fontSize: 30}}>
          Blog Screen
        </Text>
        <Text style={styles.text} onPress={this.pushViewPostScreen}>PostsList Screen</Text>
      </View>
    );
  }
}

export default BlogScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});
