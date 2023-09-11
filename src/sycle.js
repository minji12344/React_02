import React, {Component} from 'react';

class sycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    render(){
        console.log('3. render Call');
        return(
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}

export default sycle;