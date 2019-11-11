/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log('Im a console statement')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Things to do in RP</Text>
              <Text style={styles.sectionDescription}> </Text>
              <Text> You can visit the playground just right beside the school. It's the largest one in Singapore. It contains rides such as the roller rides, as well as, the swing from the horizon. </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>What and Where to eat in RP</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <Text>RP comprises of North, South and Lawn cafeteria. Only the canteen at Lawn is fully air-conditioned. The other 2, however, has their own unique stores that other canteen doesn't offer.</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> Life in RP</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
              <Text>All the students in RP are graded in accordance with their daily performance in school. They are judge by grades, attendance, behaviour etc.</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Why is RP good</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
              <Text>Come to RP to experience a fully air-conditioned facility</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
