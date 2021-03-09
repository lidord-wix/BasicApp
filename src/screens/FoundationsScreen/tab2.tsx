import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  View,
  Text,
  Image,
  ExpandableSection,
  Assets,
  Typography,
  Colors,
  BorderRadiuses,
  Shadows
} from 'react-native-ui-lib';
import _ from 'lodash';

const chevronDown = Assets.icons.chevronDown;
const chevronUp = Assets.icons.chevronUp;

class Tab2 extends Component {
  state = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false,
    expanded5: false,
    expanded6: false,
    expanded7: false,
    expanded8: false,
  };

  getHeaderElement(index: number) {
    return (
      <View marginB-10 bg-green60 row spread style={{...Shadows.sh20.bottom}}>
        <Text marginV-10 marginL-16 grey10 text60>
          {this.getTitle(index)}
        </Text>
        <Image marginT-15 marginR-20 source={this.getChevron(index)} />
      </View>
    );
  }

  getBodyElement(index: number) {
    const weights = ['T', 'L', '', 'R', 'M', 'BO', 'H', 'BL'];
    return (
      <View>
        {_.map([10, 20, 30, 40, 50, 60, 65, 70, 80, 90, 100], (fontKey) => {
          const modifiers: any = {};
          const fontName = `text${fontKey}${weights[index - 1]}`;
          const fontPreset = Typography[fontName];
          modifiers[fontName] = true;
          return (
            <View
              key={fontKey}
              paddingV-20
              centerH
              style={{
                borderBottomWidth: fontKey !== 100 && 1,
                borderColor: Colors.grey50,
              }}>
              <Text bg-green80 grey10 {...modifiers}>
                text{fontKey}
                {weights[index - 1]}
              </Text>
              <Text marginT-6 text80 grey30>
                fontSize: {fontPreset.fontSize}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }

  getTitle(index: number) {
    const titles = [
      'Thin',
      'Light',
      'Default',
      'Regular',
      'Medium',
      'Bold',
      'Heavy',
      'Black',
    ];
    return titles[index - 1];
  }

  onExpand(index: number) {
    switch (index) {
      case 1:
        this.setState({
          expanded1: !this.state.expanded1,
        });
        break;
      case 2:
        this.setState({
          expanded2: !this.state.expanded2,
        });
        break;
      case 3:
        this.setState({
          expanded3: !this.state.expanded3,
        });
        break;
      case 4:
        this.setState({
          expanded4: !this.state.expanded4,
        });
        break;
      case 5:
        this.setState({
          expanded5: !this.state.expanded5,
        });
        break;
      case 6:
        this.setState({
          expanded6: !this.state.expanded6,
        });
        break;
      case 7:
        this.setState({
          expanded7: !this.state.expanded7,
        });
        break;
      case 8:
        this.setState({
          expanded8: !this.state.expanded8,
        });
        break;
    }
  }

  getChevron(index: number) {
    switch (index) {
      case 1:
        if (this.state.expanded1) {
          return chevronUp;
        }
        return chevronDown;
      case 2:
        if (this.state.expanded2) {
          return chevronUp;
        }
        return chevronDown;
      case 3:
        if (this.state.expanded3) {
          return chevronUp;
        }
        return chevronDown;
      case 4:
        if (this.state.expanded4) {
          return chevronUp;
        }
        return chevronDown;
      case 5:
        if (this.state.expanded5) {
          return chevronUp;
        }
        return chevronDown;
      case 6:
        if (this.state.expanded6) {
          return chevronUp;
        }
        return chevronDown;
      case 7:
        if (this.state.expanded7) {
          return chevronUp;
        }
        return chevronDown;
      case 8:
        if (this.state.expanded8) {
          return chevronUp;
        }
        return chevronDown;
    }
  }

  render() {
    const {
      expanded1,
      expanded2,
      expanded3,
      expanded4,
      expanded5,
      expanded6,
      expanded7,
      expanded8,
    } = this.state;
    return (
      <ScrollView>
        <View paddingH-20>
          <Text marginT-20 text60BO grey10 center>
            Typography Usage Example:
          </Text>
          <View
            marginV-20
            marginH-70
            bg-grey60
            style={{borderRadius: BorderRadiuses.br20}}>
            <Text marginV-10 center grey10>
              {'<Text text40M>example</Text>'}
            </Text>
            <Text marginB-10 center grey10 text40M>
              example
            </Text>
          </View>
          <ExpandableSection
            expanded={expanded1}
            sectionHeader={this.getHeaderElement(1)}
            onPress={() => this.onExpand(1)}>
            {this.getBodyElement(1)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded2}
            sectionHeader={this.getHeaderElement(2)}
            onPress={() => this.onExpand(2)}>
            {this.getBodyElement(2)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded3}
            sectionHeader={this.getHeaderElement(3)}
            onPress={() => this.onExpand(3)}>
            {this.getBodyElement(3)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded4}
            sectionHeader={this.getHeaderElement(4)}
            onPress={() => this.onExpand(4)}>
            {this.getBodyElement(4)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded5}
            sectionHeader={this.getHeaderElement(5)}
            onPress={() => this.onExpand(5)}>
            {this.getBodyElement(5)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded6}
            sectionHeader={this.getHeaderElement(6)}
            onPress={() => this.onExpand(6)}>
            {this.getBodyElement(6)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded7}
            sectionHeader={this.getHeaderElement(7)}
            onPress={() => this.onExpand(7)}>
            {this.getBodyElement(7)}
          </ExpandableSection>
          <ExpandableSection
            expanded={expanded8}
            sectionHeader={this.getHeaderElement(8)}
            onPress={() => this.onExpand(8)}>
            {this.getBodyElement(8)}
          </ExpandableSection>
        </View>
      </ScrollView>
    );
  }
}

export default Tab2;
