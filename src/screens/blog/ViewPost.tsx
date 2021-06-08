import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  Colors,
  Image,
  BorderRadiuses,
  FloatingButton,
  Dialog,
  Button,
  Avatar,
  AvatarHelper,
} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {deletePost} from './posts.actions';

class ViewPost extends Component {
  static propTypes = {
    componentId: PropTypes.string,
    post: PropTypes.object,
  };

  state = {
    dialog: false,
  };

  constructor(props) {
    super(props);
    this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
  }

  onPostDeletePressed = () => {
    this.setState({dialog: true});
  };

  deletePost = async () => {
    this.setState({dialog: false});
    Navigation.pop(this.props.componentId);
    await deletePost(this.props.post.id);
  };

  onDialogDismiss = () => {
    this.setState({dialog: false});
  };

  renderDialog = () => {
    return (
      <Dialog
        visible={this.state.dialog}
        onDismiss={this.onDialogDismiss}
        center>
        <View center br20 style={styles.deleteMessage}>
          <Text text70 color={Colors.grey20} margin-12>
            Are you sure?
          </Text>
          <View bg-grey60 style={styles.horizontalSeparator} />
          <View marginV-12 row>
            <Button
              label={'Delete'}
              link
              linkColor={Colors.red30}
              marginH-18
              onPress={this.deletePost}
            />
            <View bg-grey60 style={styles.verticalSeparator} />
            <Button
              label={'Cancel'}
              link
              linkColor={Colors.dark20}
              marginH-18
              onPress={this.onDialogDismiss}
            />
          </View>
        </View>
      </Dialog>
    );
  };

  render() {
    const {post} = this.props;
    return (
      <View style={styles.container}>
        {post.publisher && (
          <View row margin-14 marginR-180 br40>
            <Avatar
              containerStyle={styles.avatarContainer}
              backgroundColor={Colors.grey60}
              label={AvatarHelper.getInitials(post.publisher)}
            />
            <Text marginL-10 marginT-12 text70M>
              {post.publisher}
            </Text>
          </View>
        )}
        <Image
          marginB-20
          marginT-20={!post.publisher}
          source={{uri: post.img}}
          cover
          style={styles.image}
        />
        <Text marginV-20 center text40>
          {post.title}
        </Text>
        <ScrollView contentContainerStyle={styles.content}>
          <Text text70 color={Colors.grey20}>
            {post.text}
          </Text>
        </ScrollView>
        <FloatingButton
          visible
          button={{
            label: 'Delete Post',
            onPress: this.onPostDeletePressed,
            color: Colors.red30,
            backgroundColor: 'transparent',
          }}
        />
        {this.state.dialog && this.renderDialog()}
      </View>
    );
  }
}
export default ViewPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
  },
  deleteMessage: {
    backgroundColor: Colors.white,
    marginHorizontal: 80,
  },
  image: {
    borderRadius: BorderRadiuses.br20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark70,
  },
  horizontalSeparator: {
    width: '90%',
    height: 1,
  },
  verticalSeparator: {
    width: 1,
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: Colors.green30,
  },
});
