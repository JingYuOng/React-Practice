import React, {Component} from 'react';

// const withClass = (WrapComponent,className) => {
// 	return (props) =>(
// 		<div className = {className}>
// 				<WrapComponent {...props}/>
// 			</div>
// 	)
// }


const withClass = (WrapComponent,className) => {

	const WithClass = class extends Component{
		render (){
			return(
			<div className={className} >
				<WrapComponent ref={this.props.forwardedRef} {...this.props} />
				</div>
				)
		}
	}

	return React.forwardRef((props,ref) => {
		return <withClass {...props} forwardedRef={ref}/>
	});
}


export default withClass;