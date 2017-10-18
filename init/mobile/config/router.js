import React from 'react'
import { TabNavigator } from 'react-navigation'

import Hello from '../components/hello.js'
import ToDoScreen from '../components/toDo.js'

export const Tabs = TabNavigator({
	ToDo: {screen: ToDoScreen},
	Test: {screen: Hello}
}, {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		activeBackgroundColor: 'green'
	}
})