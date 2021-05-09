import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { Card, RadioButton } from 'react-native-paper';
import TabBar from 'react-native-tab-bar-footer';


const taskArray = ['Helloooo00o', 'World', 'This', 'Is', 'Task', 'Grid'];
var count = 0;

const def_icon = require('./assets/house_removebg.png')
const def_log_icon = require('./assets/paper.png')

const tabs = [
    {
        icon: def_icon,
        title: 'Home'
    },
    {
        icon: def_log_icon,
        title: 'Tasks'
    }
]
var data = [
	{
		'category': 'Commute Method',
		'categoryId': 'commute_method',
		'selectedOp': 'Driving',
		'opts': ['Driving', 'Carpool', 'Public Transit', 'Walk/Bike'],
	},
	{
		'category': 'Meat Consumption',
		'categoryId': 'meat_consumption',
		'selectedOp': 'No Change',
		'opts': ['No Change', 'Alternative Meat Prod.', 'Vegan/Vegetarian'],
	},
	{
		'category': 'Plastic Waste Produced',
		'categoryId': 'plastic_waste',
		'selectedOp': 'No Change',
		'opts': ['No Change', 'Reusable Bag', 'Reusable Bottle'],
	},
];

var response = {
	'plastic_waste': '',
	'commute_method': '',
	'meat_consumption': '',
}

function getTitle(index) {
			return tabs[index]['title'];
	};
class TasksScreen extends React.Component {
	async _handleSubmit(){
		console.log('submitting: ', response);
	}
	_handleSubmitSuccess(){
		console.log('handling submit success');
	}

		render(){
			const {navigation} = this.props;
		    return (
		        <View style={styles.container}>
			    			<Text style={styles.title}>Daily Log</Text>
								<ScrollView style={styles.scrollView}>
									<CategoryList categories={data}/>
								</ScrollView>
								<TouchableHighlight
									title="Submit"
									onPress={() => {this._handleSubmit().then(() => this._handleSubmitSuccess())}}
									style={styles.submit}>
									<Text style={styles.submitText}>Submit</Text>
								</TouchableHighlight>
								<View style={styles.tab}>
									<TabBar onTabChange={(index) => navigation.navigate(getTitle(index))} tabs={tabs} />
								</View>
		        </View>
		    )
		}
}

function CategoryList(props) {
	var list = props.categories.map((item, index) => {
		console.log("foo: ", index)
		return (
			<TaskCategory key={index} data={item} catindex={index}/>
		)
	})
	return list;
}

class TaskCategory extends React.Component {
	_updateSelected(i){
		this.props.data.catselected = i;
	}
	render(){
		return(
			<View>
				<Card style={styles.categoryCard}>
					<Text style={styles.categoryTitle}>{this.props.data.category}</Text>
					<TaskButtons tasks={this.props.data.opts} selected={this.props.data.selectedOp} that={this}/>
				</Card>
			</View>
		)
	}
}

const TaskButtons = (props) => {
  const [value, setValue] = React.useState(props.tasks[0]);
	const setSelected = (val) => {
		response[props.that.props.data.categoryId]=val;
		console.log(response);
	}

	var list = props.tasks.map((item, index) => {
		return(
			<RadioButton.Item
				uncheckedColor="#c3ad98"
				color="#165915"
				label={item}
				style={styles.button}
				labelStyle={styles.buttonLabel}
				key={index}
				value={item}
			/>
		)
	})
	return (
		<RadioButton.Group onValueChange={value => {setSelected(value);setValue(value)}} value={value}>
			{list}
		</RadioButton.Group>
	);
};

const styles = StyleSheet.create({
		title: {
			paddingTop: 20,
			fontSize: 23,
			textAlign: 'center'
		},
		container: {
			padding: 30,
			width: '100%',
			height: '100%'
		},
		scrollView: {
			height:'100%'
		},
		categoryCard:{
			marginTop: 10,
			padding: 5,
			backgroundColor: '#f9f8f8'
		},
		categoryTitle:{
			borderRadius: 5,
			backgroundColor: '#abb97c',
			margin: 5,
			padding: 5,
			fontSize: 20,
			fontWeight: '400'	
		},
		button: {
			color: "#364702"
		},
		buttonLabel:{
			fontSize: 17,	
			color: "#364702"
		},
		submit:{
			marginTop: 9,
			backgroundColor: "#165915",
			minHeight: 45,
			borderRadius: 10,
			justifyContent: 'center'
		},
		submitText:{
			textAlign: 'center',
			fontSize: 20,
			color:'#f9f8f8'
		},
		taskText: {
			color: "white",
			fontSize: 20,
		},
		tab:{
			marginBottom: -35,
			marginLeft: -35,
			marginRight: -35,
		},
});
const tasksProperties = {};

export default { TasksScreen, tasksProperties };
