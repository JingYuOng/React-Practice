import React ,{PureComponent} from 'react';

import Person from './Person/Person';
// import WithClass from '../../hoc/WithClass';

class Persons extends PureComponent { 
    constructor (props){
    super(props);
    console.log('[Persons.js] Inside Construtor',props);
    this.lastPersonRef = React.createRef();  // refer to last person we creating 
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('Persons.js Inside componentDidMount() ');
    this.lastPersonRef.current.focus();
  }
  
  componentWillReceiveProps (nextProps) {
    console.log('[Update Person.js ] Inside componentWillReceiveProps',nextProps);
  }

  // shouldComponentUpdate (nextProps,nextState) {
  //   console.log('[Update Person.js ] Inside shouldComponenReceive',nextProps,nextState);
  //   return nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed || 
  //       nextProps.click !== this.props.click ;
  //   //return true;
  // }


  componentWillUpdate ( nextProps, nextState) {
    console.log('[Update Person.js] Inside componentWillUpdate',nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[Update Person.js] Inside componentDidUpdate');
  }
 

	render(){
        console.log('[Persons.js] Inside render()');
		return this.props.persons.map((person,index) => {
			return <Person
            	click ={() => this.props.click(index)}
              position = {index}
              ref = {this.lastPersonRef}
            	name = {person.name} 
            	age={person.age}
            	key={person.id}
            	changed={(event) => this.props.changed(event,person.id)}/>
            
           }
        );
    }
}	

export default Persons; 