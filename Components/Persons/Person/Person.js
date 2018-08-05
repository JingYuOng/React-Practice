import React,{Component} from 'react';
import classes from'./Person.css';
import withClass from '../../../hoc/WithClass';
import Aux1 from '../../../hoc/Aux1';
import PropTypes from 'prop-types';
 //import Radium from 'radium'
 // function component
 // stick to this function ; Most application dont change application state, but just render something
 // props.click refer to the variable (click) in Apps.js
class Person extends Component {

	// const style = {
	// 	'@media(min-width:500px)':{
	// 		width : '450px' 
	// 	}
	// };
	constructor (props){
    super(props);
    console.log('[Person.js] Inside Construtor',props);
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('Person.js Inside componentDidMount() ');
    if (this.props.position === 0)
    this.inputElement.current.focus();
  }

  focus(){
  	this.inputElement.current.focus();
  }
    // ref = inputElement : to store references 
	render(){
		console.log('[Person.js] Inside render()');
		return (
			<Aux1>
		     
			<p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old </p> 
			<p>{this.props.children}</p>
			<input
				ref = {this.inputElement } 
				type='text' 
				onChange={this.props.changed} 
				value={this.props.name}/>
			</Aux1>
		)
	

 	}
}

Person.propTypes = {
	click : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	changed : PropTypes.func
};
export default withClass(Person,classes.Person);