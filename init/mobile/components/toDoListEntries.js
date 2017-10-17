
import React, { Component } from 'react'
import { 
  ScrollView,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

export default class ToDoList extends Component {
  render() {
    console.log(this.props, 'props ToDoList')
    return (
      <View>
          <Text>{this.props.todo.text} {JSON.stringify(this.props.todo.completed)}</Text>
      </View>
    );
  }
}
