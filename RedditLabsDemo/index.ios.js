/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,TouchableOpacity,
  View
} from 'react-native';
import RNRedditLabs from 'react-native-redditlabs';
console.log(" RNRedditLabs: ",RNRedditLabs);
export default class RedditLabsDemo extends Component {

  redditLabs(){
var date = new Date();
    RNRedditLabs.addEvent('Birthday Party', {
  location: '4 Privet Drive, Surrey',
  time: date.getTime(),
  description: '...'
})
console.warn("done");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={this.redditLabs}>
    <Text style={{color:'rgba(0,0,0,0.5)',fontSize: 20,textAlign: "center",margin: 10,}}>
  redditLabs
    </Text>
  </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RedditLabsDemo', () => RedditLabsDemo);
