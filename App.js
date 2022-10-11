/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  FlatList,
  ListItem
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import UsersCard from './components/UsersCard';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // console.log('data ',data.results[0])
  // console.log('Name ',data.results[0].name.first)

  return (
    <ScrollView style={{flex: 1, borderColor: 'green', borderWidth: 5, backgroundColor: '#aefcb4', paddingHorizontal: 10 }}>
      <Text style={ styles.heading1 }>Customers</Text>
      <UsersCard />
        <View>
          
        </View>
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    // height: 100,
    // backgroundColor: 'green',
  },
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
