import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  List,
  ListItem,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import axios from 'axios'
/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

//Inicializamos el array con cualquier valor

const data = new Array(8).fill({
  title: 'Item',
});


const ListSimpleUsageShowcase = (props) => {

  const renderItem = ({ item, index }) => (
    <ListItem title={item.line_name}/>
  );

  return (
    <List
      style={{container: {maxHeight: 180}}}
      data={props.data}
      renderItem={renderItem}
    />
  );
};

const App = () => {

  const [lines, setLines] = useState(data);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://pa7hw6njoh.execute-api.us-east-2.amazonaws.com/Dev/lines/')
        .then(response => setLines(response.data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

return (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        
        <ListSimpleUsageShowcase data={lines}></ListSimpleUsageShowcase>

      </Layout>
    </ApplicationProvider>
  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;