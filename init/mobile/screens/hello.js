import React, { Component } from 'react';
import {View, Text } from 'react-native'

export default class Hello extends Component {
	static navigationOptions = {
		tabBarLabel: 'Tab1'
	}
	render(){
		return (
			<View>
				<Text> Hello Page </Text>
			</View>
		)
	}
}