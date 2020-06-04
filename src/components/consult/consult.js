import React from 'react'
import '../../styles/main.scss'
import { observer, inject } from 'mobx-react';

@inject('Database')
@observer
export default class Consult extends React.Component{

    constructor(props){
        super(props)
        this.student = this.student.bind(this)

        this.state = {
            data: (<tr><td colSpan="6" className="loading">Loading</td></tr>)
        }

    }
    student(e){
        e.preventDefault();
        this.props.history.push("/student/"+e.target.parentNode.getAttribute('data-tag'))
    }

    componentDidMount(){
        const db = this.props.Database.db.studentList
        this.setState({data: this.mapTable(db)})
        
    }

    mapTable(data){
        
        return data.map((elem)=>{
            return (
                <tr onClick={this.student} data-tag={elem.id} key={elem.id}>
                    <td className="name">{elem.firstName}</td>
                    <td className="name">{elem.secondName}</td>
                    <td>{elem.streetNumber}</td>
                    <td>{elem.streetName}</td>
                    <td>{elem.phoneNumber}</td>
                    <td>{elem.gpa}</td>
                </tr>
            )
        })
        
    }

    render(){
        return (
            <div className="consult">
                <table>
                    <thead>
                        <tr>
                            <td>FIRST NAME</td>
                            <td>SECOND NAME</td>
                            <td>STREET NUMBER</td>
                            <td>STREET NAME</td>
                            <td>PHONE NUMBER</td>
                            <td>GPA</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data}
                    </tbody>
                </table>
            </div>
        )
    }
}