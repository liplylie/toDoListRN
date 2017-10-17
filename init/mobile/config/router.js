import React from 'react'
import { TabNavigator } from 'react-navigation'

import Hello from '../screens/hello.js'

export const Tabs = TabNavigator({
	Tab1: {screen: Hello}
}, {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		activeBackgroundColor: 'green'
	}
})