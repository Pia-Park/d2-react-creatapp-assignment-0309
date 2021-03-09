import React, { Component } from 'react'

export class StatePractice extends Component {

    constructor(){
        super()
        this.state = {
            message: '',
            placeholder: '',
            imageWidth: ''
        }
        this.handleMessage = this.handleMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleUserForm = this.handleUserForm.bind(this)
    }

    handleMessage(e){
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('Form submitted: ', this.state.message)
    }

    handleClear(){
        this.setState({
            message: ''
        })
    }

    handleUserForm(e){
        this.setState({
            placeholder: 'Write anything!!!'
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3 onMouseEnter={this.handleClear}>{this.state.message}</h3>
                    <input type="text" onFocus={this.handleUserForm} placeholder={this.state.placeholder} onChange={this.handleMessage} required/>
                    <button type="submit">SUBMIT</button>
                    <img src="https://park-inae.netlify.app/#images-d-1" alt=""/>
                </form>
            </div>
        )
    }
}

export default StatePractice
