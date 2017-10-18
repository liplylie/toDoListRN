import React, { Component } from 'react';
import {View, Text } from 'react-native'

export default class Hello extends Component {
	static navigationOptions = {
		tabBarLabel: 'Hello'
	}
	render(){
		return (
			<View style={{flex:1}}>
				<Text style={{textAlign: 'center', margin: 10}}> Hello Page </Text>
			</View>
		)
	}
}