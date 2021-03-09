import React, { Component } from 'react'

export class SimpleEvent extends Component {
    // constructor(){
    //     super()
    // this.state={
    //     btnText
    // }
    // this.handleChange = this.handleChange.bind(this)
    // }

    state = {
        btnText: 'Click Me',
        inputText: ''
    }

    handleClick(){
        console.log('clicked!!!!!!!')

    }

    handleChange= (e) => {
        // console.dir(e.target.value)
        this.setState({
            inputText: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted: ', this.state.inputText)

    }

    render() {
        // const btn = document.getElementsByClassName('btn')
        // console.dir(btn)
        return (
            <div>
                {/* <button className="btn" onClick={this.handleClick}>{this.state.btnText}</button> */}

                {/* <button className="btn" onClick={()=>this.setState({ btnText: 'I was Clicked!'})}>{this.state.btnText}</button> */}
                <form onSubmit={this.handleSubmit}>
                    <button className="btn" type="submit">{this.state.btnText}</button>
                    <input type="text" placeholder="Enter some text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default SimpleEvent
