
import React, { Component } from 'react'
import { 
  ScrollView,
  TouchableHighlight,
  Text
} from 'react-native';

export default class TouchDemo extends Component {
	
  render() {
    return (
      <ScrollView>
        <TouchableHighlight onPress={() => console.log('pressed')}>
          <Text>Proper Touch Handling</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
