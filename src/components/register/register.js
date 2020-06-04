import React from 'react'
import '../../styles/main.scss'
import { observer, inject } from 'mobx-react';


@inject('Database')
@observer
class Register extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            secondName: '',
            streetNumber: '',
            streetName: '',
            phoneNumber: '',
            gpa: ''
        };

        this.submit = this.submit.bind(this)
        this.updateInputValue = this.updateInputValue.bind(this)
    }

    updateInputValue(e){

        let bufferState = {}
        bufferState[e.target.getAttribute('data-tag')] = e.target.value

        this.setState(bufferState)
    }

    submit(e){
        e.preventDefault();
        const db = this.props.Database.db

        db.insert([{
            "firstName": this.state.firstName,
            "secondName": this.state.secondName,
            "streetNumber": this.state.streetNumber,
            "streetName": this.state.streetName,
            "phoneNumber": this.state.phoneNumber,
            "gpa": this.state.gpa
        }])

        console.log(db.studentList)
    }

    render(){
        return (
            <div className="register" >
                <form onSubmit={this.submit}>
                    <input value={this.state.firstName} onChange={e => this.updateInputValue(e)} data-tag="firstName" type="text" placeholder="First Name"></input>
                    <input value={this.state.secondName} onChange={e => this.updateInputValue(e)} data-tag="secondName" type="text" placeholder="Second Name"></input>
                    <input value={this.state.streetNumber} onChange={e => this.updateInputValue(e)} data-tag="streetNumber" type="number" placeholder="Street Number"></input>
                    <input value={this.state.streetName} onChange={e => this.updateInputValue(e)} data-tag="streetName" type="text" placeholder="Street Name"></input>
                    <input value={this.state.phoneNumber} onChange={e => this.updateInputValue(e)} data-tag="phoneNumber" type="number" placeholder="Phone Number"></input>
                    <input value={this.state.gpa} onChange={e => this.updateInputValue(e)} data-tag="gpa" type="text" placeholder="GPA"></input>
                    <button> &#10003; Save</button>
                </form>
            </div>
        )
    }
}

export default Register