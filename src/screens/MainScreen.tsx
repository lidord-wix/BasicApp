import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Colors,
  Assets,
  Button,
  Image,
  TouchableOpacity,
  GradientSlider,
  Typography,
  Card,
} from 'react-native-ui-lib';
import {registerScreens} from '../screens';
import {setAppTheme} from '../configurations';
import {push, TopBar} from 'rnn-copilot';

registerScreens();
setAppTheme();

const renderButton = (props: any, label: string) => {
  const topBar = new TopBar()
    .withTitle(label)
    .withOptions({backButton: {title: 'Main Screen'}});
  return (
    <TouchableOpacity
      marginB-20
      marginH-100
      br30
      row
      spread
      style={[styles.button, {backgroundColor: props.color}]}
      onPress={() =>
        push(`${label}Screen`, props.componentId).withTopBar(topBar).go()
      }>
      <Text marginV-10 marginL-16 color={Colors.white} text60>
        {label}
      </Text>
      <Image
        tintColor={Colors.white}
        marginT-16
        marginR-10
        source={Assets.icons.chevronRight}
      />
    </TouchableOpacity>
  );
};

const MainScreen = (props: any) => {
  const [color, setColor] = useState(Colors.green30);

  const changeColor = (value: any) => {
    setColor(value);
  };

  const resetColor = () => {
    setColor(Colors.green30);
  };

  return (
    <View flex centerV style={styles.container}>
      <View center flex>
        <Text text30BL>Main Screen</Text>
      </View>
      <View flex-4 centerV>
        {renderButton({...props, color}, 'Login')}
        {renderButton({...props, color}, 'Foundations')}
        {renderButton({...props, color}, 'Blog')}
        {renderButton({...props, color}, 'Gallery')}
        {renderButton({...props, color}, 'ErrorBoundary')}
      </View>
      <Card centerV flex-2 paddingH-20 marginH-20 marginB-30>
        <Text center text60 marginB-10>
          Pick Buttons Color
        </Text>
        <GradientSlider
          color={color}
          type={'hue'}
          onValueChange={(value) => changeColor(value)}
        />
        <View marginT-10 center>
          <Button
            label={'Reset Color'}
            onPress={resetColor}
            labelStyle={Typography.text60}
          />
        </View>
      </Card>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey80,
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.grey50,
  },
});
