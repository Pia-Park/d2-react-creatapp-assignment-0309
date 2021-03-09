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
        this.handleWidth = this.handleWidth.bind(this)
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

    handleWidth(){
        console.dir('Image Hieght: ' + this.imgElement.current.clientHeight)
        if(this.imgElement.current.clientHeight > 100){
            console.log('Your Image is Big!!!!!!!')
        } else {
            console.log('Your Image is Small!!!!!!')
        }
    }

    imgElement = React.createRef();

    render() {
        return (
            <div>
                <form className="app-main" onSubmit={this.handleSubmit}>
                    <h3 onMouseEnter={this.handleClear}>{this.state.message}</h3>
                    <input type="text" onFocus={this.handleUserForm} placeholder={this.state.placeholder} onChange={this.handleMessage} required/>
                    <button type="submit">SUBMIT</button>
                    <img src="https://pixabay.com/get/gb26cd4a045096402ef7038d2a29a528938d8bf2a3c9d53ba719fc69544126b90f9a8dbc12f3c57a86094b5de2a72cf51_1920.jpg" ref={this.imgElement} onLoad={this.handleWidth} className="image" alt=""/>
                </form>
            </div>
        )
    }
}

export default StatePractice
