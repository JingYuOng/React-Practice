import React from 'react';
import classes from './Cockpit.css';
import Aux1 from '../../hoc/Aux1';
const cockpit = (props) => {

	let assignClass = [];
	let btnClass =classes.Button;

	if (props.showPerson){
		btnClass = [classes.Button,classes.Red].join(' ');
	}
    if (props.persons.length <=2 ){
      assignClass.push('classes.red');
    }

    if (props.persons.length <= 1 ){
      assignClass.push('classes.bold');
    }
    
    if (props.persons.length < 1 ){
      assignClass.push('classes.border');
    }

    
    return (
            //className = {classes.Cockpit} use it to access css
    	<Aux1>
         	<h1>{props.appTitle}</h1>
        	<p className={assignClass.join(' ')}>This is really working</p>
        	<button
        		className = {btnClass}
        		onClick={props.click}>Toggle Perosn
        	</button>
        </Aux1>
    );

}

    export default cockpit;