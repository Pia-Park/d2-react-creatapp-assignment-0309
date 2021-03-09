import React, { Component } from 'react'

export class StateInAction extends Component {
    constructor(){
        super()
        this.state = {
            text: 'State is now in action'
        }//you cannot modify state directly
        setTimeout(()=>{
            this.setState({
                text: 'State has Changed'
            })
        }, 2000)
    }
    // this.setState({
    //     text:'this is a safe modification'
    // }) if you want to modify directly you should use setState()
    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                {/* <p>{this.props.title}</p> */}
            </div>
        );
    }
}

export default StateInAction;
