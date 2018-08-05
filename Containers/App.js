import React, { PureComponent } from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux1 from '../hoc/Aux1';
// import Radium, {StyleRoot} from 'radium';
// this.setState({showPerson: !doesShow}); shows that doesShow is false then showPerson is true;
// property is variable of class
// this. refer to class
class App extends PureComponent {
  // state is used for Extended Component and manage from inside component
  // use state for care
  // array (object)
  // 
  constructor (props){
    super(props)
    console.log('[App.js] Inside Construtor',props);
    this.state = {
    	persons:  [
      		{ id :'qwer' ,name: "Max" ,age:11},
      		{ id :'asdf' ,name: "Law" ,age:31},
      		{ id :'zxcv' ,name: "Shit" ,age:78}],
  			otherState: "some value",
  			showPerson : false,
  			toggleClicked : 0
    };
    
  }

  componentWillMount(){
    console.log('[Apps.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('App.js Inside componentDidMount' );
  }

  // shouldComponentUpdate (nextProps,nextState) {
  //   console.log('[Update App.js ] Inside shouldComponenReceive',nextProps,nextState);
  //   return nextState.persons !== this.state.persons || 
  //     nextState.showPerson !== this.state.showPerson;
  // }


  componentWillUpdate ( nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate',nextProps,nextState);
  }

  componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate');
  }
    // click to change name
  onClickHandler = (newName) => {
    // console.log("Was Clicked");
    // this.state.person[0].name = "Maxilian" React will not recognise this please do not do this!!
    this.setState ( {
      person: [
        {id :'qwer' ,name: newName, age:28},
        {id :'asdf' ,name: "Manu", age:29},
        {id :'zxcv' ,name: "Stephanie", age:27}]
    })
  }

  // event is object args
  // event.target.value is used to input value 
  nameChangegHandler = (event,id) => {

    // to find the target index was clicked
    const personInd = this.state.persons.findIndex( p => {
      return (p.id === id) ;
    });
    // assign target index to new var
    const newperson ={ ...this.state.persons[personInd] };
    // const newperosn = Object.assign({}, this.state.person[personInd]);

    // str the changed name to var.name
    newperson.name = event.target.value;
    // 
    const persons = [...this.state.persons];
    persons[personInd] = newperson ;

    this.setState({persons : persons});

  }

  // a good practice should create a copy before delete
  // should always update the state in an immutable fashion so without mutating original
  deletePersonHandler = (personIndex) => {
     // const person = this.state.person.slice(); // create a copy before change it 
    const persons = [...this.state.persons] // spread function
    persons.splice(personIndex,1); // delete person by 1.
    this.setState({persons : persons}); // update the latest person
  }
  // new function
  
  nameToggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState( (prevState,props) => {
    	return {
    		showPerson: !doesShow,
    		toggleClicked : prevState.toggleClicked + 1 }
    });
 }
 // can pass down clickhandler and change value from there
 // when using => think like just add return in front
 // ={this.onClickHandler.bind(this,'Stephen Curry')} also can do the job
 // const style is new function of css in jsx, all must write in string cuz in JSX
 // tag is className and array is refer to state!!!
 // everthing inside render gets executed
  render() { 
    // props is not a var here cuz is not declared
    let persons =null ;
    console.log('[App.js] Inside render()');

    if (this.state.showPerson) {
          persons = 
              <Persons 
               persons = {this.state.persons}
               click={this.deletePersonHandler}
               changed = {this.nameChangegHandler}/>; 
    }
        

    return (
      <Aux1>
        <button onClick={() => {this.setState({showPerson:true})}}>Show Person</button>
        <Cockpit 
          appTitle = {this.props.title}
          showPerson = {this.state.showPerson}
          persons = {this.state.persons}
          click ={this.nameToggleHandler} />
          {persons}
      </Aux1>  
   );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }

}

export default withClass(App,classes.App);  

