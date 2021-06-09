import _ from 'lodash';
import React, {PureComponent} from 'react';
import {
  View,
  Colors,
  TabController,
  TabControllerItemProps,
} from 'react-native-ui-lib';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';
import Tab6 from './tab6';
import {StyleSheet} from 'react-native';

const TABS = [
  'About',
  'Typography',
  'Colors',
  'Spacings',
  'Shadows',
  'Border Radius',
];

interface State {
  items: TabControllerItemProps[];
}

class FoundationsScreen extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [],
    };

    this.state.items = this.generateTabItems();
  }

  generateTabItems = (): TabControllerItemProps[] => {
    let items: TabControllerItemProps[] = _.chain(TABS)
      .take(TABS.length)
      .map<TabControllerItemProps>((tab) => ({label: tab, key: tab}))
      .value();

    return items;
  };

  renderTabPages() {
    return (
      <TabController.PageCarousel>
        <TabController.TabPage index={0}>
          <Tab1 />
        </TabController.TabPage>
        <TabController.TabPage index={1}>
          <Tab2 />
        </TabController.TabPage>
        <TabController.TabPage index={2}>
          <Tab3 />
        </TabController.TabPage>
        <TabController.TabPage index={3}>
          <Tab4 />
        </TabController.TabPage>
        <TabController.TabPage index={4}>
          <Tab5 />
        </TabController.TabPage>
        <TabController.TabPage index={5}>
          <Tab6 />
        </TabController.TabPage>
      </TabController.PageCarousel>
    );
  }

  render() {
    return (
      <View flex bg-grey70>
        <TabController asCarousel items={this.state.items}>
          <TabController.TabBar
            backgroundColor={Colors.grey70}
            activeBackgroundColor={Colors.green80}
            enableShadow
            labelColor={Colors.grey10}
            selectedLabelColor={Colors.green30}
            indicatorStyle={styles.indicator}
          />
          {this.renderTabPages()}
        </TabController>
      </View>
    );
  }
}

export default gestureHandlerRootHOC(FoundationsScreen);

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: Colors.green30,
  },
});
