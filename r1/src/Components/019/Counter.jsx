import React from 'react';


class Counter extends React.Component{


constructor(){
    super();
    this.state = {counter:0};
}
onClick = () => {
    this.setState(s => ({counter: s.counter +1}))
}

componentDidMount(){
    console.log('Loaded')
}
render(){
    return(
        <>
        <div>{this.state.counter}: {this.props.when}</div>
        <button onClick={this.onClick}>
            <svg>
                <use href = "#star"/>
            </svg>
        </button>
        </>
    )
}
}

export default Counter